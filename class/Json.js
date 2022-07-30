const bfs = require('../fs');
require('../Extension/Object')
require('../Extension/Array')
class Json {
  constructor(obj = {}) {
    if (typeof obj == 'string' || typeof obj == 'object')
      this._obj = JSON.parse(typeof obj == 'string' ? obj : JSON.stringify(obj));
    else throw TypeError(`"${obj}" not is a json valid`);
  }
  toObject() {
    return this._obj;
  }
  toString() {
    return JSON.stringify(this._obj, null, 2);
  }
  compare(Json) {
    return Json.toObject().compare(this._obj)
  }
  copy() {
    return new Json(this.toObject());
  }
  createFile(path) {
    bfs.file(`${path}.json`, this.toString());
  }
}
module['exports'] = Json;
