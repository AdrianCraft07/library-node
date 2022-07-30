module['exports'] =class Information {
  constructor(info = [['', '']]) {
    this._info = info;
  }
  addData(key, value) {
    this._info.push([key, value]);
    return this
  }
  print() {
    let length = 0;
    for (let i = 0; i < this._info.length; i++) {
      const element = this._info[i][0];
      if (element.length > length) length = element.length;
    }
    console.log(this._info
      .map(value => [value[0].setLength(length), value[1]])
      .map(value => value.join(' '))
      .join('\n'));
    return this
  }
}