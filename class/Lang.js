const bfs = require('../fs');
module['exports'] = class Lang {
  constructor(obj) {
    this._obj = JSON.parse(JSON.stringify(obj || {}));
  }
  toString() {
    let lang = '';
    for (const key of Object.keys(this._obj)) lang += `${key}=${this._obj[key]}\n`;
    return lang;
  }
  toObject() {
    return this._obj;
  }
  setLang(key, value) {
    if (typeof value == 'string') this._obj[key] = value;
  }
  copy() {
    return new Lang(this.name, this._obj);
  }
  createFile(path) {
    bfs.file(`${path}/${this.name}.lang`, this.toString());
  }
};
