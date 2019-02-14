const path = require('path');
const sassTrue = require('sass-true');

const testFile = path.join(__dirname, 'tests/sass-test.scss');

sassTrue.runSass({ file: testFile }, describe, it);
