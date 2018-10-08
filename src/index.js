const path = require('path');
const program = require('commander');
const modulePkg = require('../package.json');
const appPath = require('./appPath');

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({
  path: appPath,
  silent: true
});

// CLI

let cmdValue;
let envValue;
program
  .version(modulePkg.version)

program
  .command('setup')
    .action(() => require('./scripts/setup'));

program
  .command('build')
    .action(() => validateSetup() && require('./scripts/build'));

program
  .command('start')
    .action(() => validateSetup() && require('./scripts/start'));

program
  .command('test')
    .action(() => validateSetup() && require('./scripts/test'));

program
  .command('transpile')
    .action(() => exec(`NODE_ENV=production babel src --out-dir transpiled --presets react-app`));

program
  .command('start:prod')
    .action(() => {
      process.env.NODE_ENV = process.env.NODE_ENV || 'production';
      validateSetup() && require('./server');
    });
    
program.parse(process.argv);

// Helper Functions

function testJest (value) {
  const modulePkgName = `<rootDir>/node_modules/microfrontend-build-tools/`;
  return value.match(new RegExp(`^${modulePkgName}`));
}

// Validate proper installation
function validateSetup () {
  const appPkg = path.resolve(`${appPath}/package.json`);
  const hasSetupFiles = () => appPkg.jest && appPkg.jest.setupFiles.find(testJest);
  const hasTransforms = () => appPkg.jest && Object.values(appPkg.jest.transform).find(testJest);
  if (!hasSetupFiles() || !hasTransforms()) {
    console.warn('Microfrontend not configured');
    console.warn();
    console.warn('Run');
    console.warn('    node_modules/.bin/microfrontend setup');

    process.exit(1);
  }
}