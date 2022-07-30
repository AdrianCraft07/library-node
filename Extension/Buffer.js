const { file } = require('../fs')

/**
 * @param {string} name
 * @param {function} func
 */
let addFunction = function (name, func) {
  Buffer.prototype[name] = func;
};
addFunction('createFile', function (path = './file.txt') {
  file(path, this)
})