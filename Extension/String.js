const bfs = require('../fs');
const Json = require('../class/Json');

/**
 *
 * @param {String} name
 * @param {function} func
 */
let addFunction = function (name, func) {
  String.prototype[name] = func;
};

addFunction('createFile', function (path) {
  bfs.file(path, this);
});
addFunction('replaceFull', function (replaces, sign) {
  let newText = this;
  sign = sign || '';
  if (Array.isArray(replaces))
    replaces.forEach(data => {
      if (toString.call(data) === '[object String]') {
        let preReplace = data.split(':');
        let replace = [`${sign}${preReplace[0]}${sign}`, preReplace[1]];
        newText = newText.replaceAll(replace[0], replace[1]);
      }
    });
  return newText.txt;
});
addFunction('toJson', function () {
  return new Json(this);
});

addFunction('toObject', function () {
  try {
    return JSON.parse(this.txt);
  } catch (e) {
    return {};
  }
});
addFunction('toRegExp', function (flags) {
  return RegExp(this, flags);
});
addFunction('reverse', function () {
  return this.split('').reverse().join('');
});
addFunction('setLength', function (length) {
  let data,
    array = this.split('');

  if (this.length > length) array.length = length;
  else while (array.length <= length) array.push(' ');

  data = array.join('');

  return data;
});
