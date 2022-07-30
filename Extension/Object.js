
const Json = require('../class/Json')

function type(data) {
  return toString.call(data);
}
function isArray(data) {
  return type(data) === '[object Array]';
}
function isObject(data) {
  return type(data) === '[object Object]';
}
function isIterable(data) {
  return isObject(data) || isArray(data);
}

/**
 *
 * @param {String} name
 * @param {function} func
 */
let addFunction = function (name, func) {
  Object.prototype[name] = func;
};
addFunction('toJson', function () {
  return new Json(this);
});
addFunction('_toString', function () {
  return JSON.stringify(this, null, 2);
});

addFunction('toArray', function () {
  return Object.entries(this);
});
addFunction('keys', function () {
  return Object.keys(this)
});
addFunction('format', function (obj = {}) {
  let bool = false
  this.keys().filter(value => typeof this[value] == typeof obj[value] || obj[value] == undefined).forEach(value => bool ||= value);
  return bool
})
addFunction('compare', function (obj) {
  if (!isObject(obj)) throw new TypeError(`${obj} is not Object`);
  return (
    this.keys().every(name => {
      if (isIterable(this[name])) return this[name].compare(obj[name]);
      return this[name] === obj[name];
    }) &&
    obj.keys().every(name => {
      if (isIterable(obj[name])) return this[name].compare(obj[name]);
      return obj[name] === this[name];
    })
  );
});
addFunction('getData', function (route) {
  if (route == undefined) return this
  let routes = route.split('.');
  if (routes.length == 1) return this[routes[0]]
  return isIterable(this[routes[0]])
    ? this[routes[0]].getData(routes.deleteIndex(0).join('.'))
    : this[routes[0]];
});
addFunction('push', function (key, value) {
  let mod = key => {
    let newKey = !!this[key] ? '_' + key : key;
    return !!this[newKey] ? mod(newKey) : newKey;
  };
  if (value) this[mod(key)] = value;
  else key.keys().forEach(value => this.push(value, key[value]));
  return this;
});
addFunction('delete', function (key) {
  delete this[key]
  return this;
});
addFunction('search', function (item) {
  let self = this.keys();
  let object = self.filter(key => isIterable(this[key])),
    keys;
  if (isIterable(item))
    if (isArray(item))
      keys = self.filter(key => isIterable(this[key])).filter(key => this[key].compare(item));
    else keys = self.filter(key => isIterable(this[key])).filter(key => this[key].compare(item));
  else keys = self.filter(key => !isIterable(this[key])).filter(key => this[key] === item);
  keys.push(
    ...object
      .map(key => this[key].search(item).map(value => `${key}.${value || ''}`))
      .map(v => v.filter(v => !v.endsWith('.'))).upLevel
  );
  return keys.filter(value => value);
});