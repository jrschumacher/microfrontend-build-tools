const prettier = require('prettier');
const prettyJson = path => prettier.format(require(path), { parser: 'json' })

console.log('Setps to configure the Microfrontend tools');
console.log();
console.log('Add the following to package.json:');
console.log();
console.log('Scripts Config');
console.log(prettyJson('../templates/scriptsConfig'));
console.log();
console.log('Jest Config');
console.log(prettyJson('../templates/jestConfig'));
console.log();
console.log('Babel Config');
console.log(prettyJson('../templates/babelConfig'));
console.log();
console.log('Eslint Config');
console.log(prettyJson('../templates/eslintConfig'));

module.exports = {};