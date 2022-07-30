
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
 * @param {string} name
 * @param {function} func
 */
let addProperty = function (name, func) {
  Array.prototype.__defineGetter__(name, func);
};

/**
 * @param {string} name
 * @param {function} func
 */
let addFunction = function (name, func) {
  Array.prototype[name] = func;
};
addFunction('toObject', function () {
  return Object.fromEntries(this)
});
addFunction('_toString', function () {
  return JSON.stringify(this, null, 2);
});
addFunction('search', function (item) {
  let self = this.map((value, index) => [value, index]);
  let object = self.filter(key => isIterable(key[0])),
    keys;
  if (isIterable(item))
    if (isArray(item))
      keys = self
        .filter(key => isIterable(key[0]))
        .filter(key => key[0].compare(item))
        .map(value => value[1]);
    else
      keys = self
        .filter(key => isIterable(key))
        .filter(key => key[0].compare(item))
        .map(value => value[1]);
  else keys = self.filter(key => key[0] === item).map(value => value[1]);
  keys.push(
    ...object
      .map(key => key[0].search(item).map(value => `${key[1]}.${value || ''}`))
      .map(v => v.filter(v => !v.endsWith('.'))).upLevel
  );
  return keys.filter(value => value);
});
addFunction('deleteIndex', function (spaces) {
  let array = [];
  if (typeof spaces === 'number') {
    this.forEach((_, i) => {
      if (spaces !== i) array.push(this[i]);
    });
  } else if (typeof spaces === 'object') {
    if (!isArray(spaces)) throw new TypeError(`"${spaces}" is not valid`);
    array = this;
    spaces.order.number().forEach((number, index) => {
      array = array.deleteIndex(number - index);
    });
  }
  return array;
});
addFunction('getData', function (route) {
  let routes = route.split('.');
  return isIterable(this[routes[0]])
    ? this[routes[0]].getData(routes.deleteIndex(0).join('.'))
    : this[routes[0]];
});
addFunction('max', function (number) {
  let array = [];
  if (typeof number === 'number') array = this.filter((_, index) => index < number);
  return array;
});
addFunction('dataExists', function (data) {
  let locate = [];
  this.forEach((valor, index) => {
    if (valor === data) locate.push(index);
  });
  return { valor: locate > 0, locate };
});
addProperty('end', function () {
  return this.length - 1;
});
addFunction('endItem', function () {
  return this[this.end];
});
addFunction('endDelete', function () {
  return this.max(this.end);
});
addFunction('compare', function (arr) {
  if (!isArray(arr)) throw new TypeError(`${arr} is not Array`);
  return (
    this.every(name => {
      if (isIterable(this[name])) return this[name].compare(arr[name]);
      return this[name] === arr[name];
    }) &&
    arr.every(name => {
      if (isIterable(arr[name])) return this[name].compare(arr[name]);
      return arr[name] === this[name];
    })
  );
});


