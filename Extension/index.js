require('./Array');
require('./Buffer');
require('./Number');
require('./Object');
require('./String');

/**
 *
 * @param {T} Class
 * @returns {(name:String, func:Function) => void}
 */
let createAddProperty = Class =>
  /**
   * @param {string} name
   * @param {function} func
   */ function (name, func) {
    Class.prototype.__defineGetter__(name, func);
  };
/**
 *
 * @param {T} Class
 * @returns {(name:String, func:Function) => void}
 */
let createAddFunction = Class =>
  /**
   * @param {string} name
   * @param {function} func
   */ function (name, func) {
    Class.prototype[name] = func;
  };

module['exports'] = {
  createAddProperty,
  createAddFunction,
};
