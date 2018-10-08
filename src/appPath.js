const path = require('path');

const dirname = path.resolve(__dirname);

module.exports = (dirname.match('/node_modules') && dirname.split('/node_modules')[0]) || '__DEV__';