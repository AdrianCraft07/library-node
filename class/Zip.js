const fs = require('fs');
const archiver = require('archiver');

require('../Extension/Array');

module['exports'] = class Zip {
  constructor(pathZip) {
    this.archive = archiver('zip');
    this.archive.pipe(fs.createWriteStream(pathZip));
  }
  append(text, nameFile) {
    nameFile ||= 'text.txt';
    this.archive.append(text, { name: nameFile });
    return this;
  }
  file(pathFile, nameFile) {
    nameFile ||= pathFile.split('/').endItem;
    this.archive.file(pathFile, { name: nameFile });
    return this;
  }
  folder(pathFolder, nameFolder) {
    nameFolder ||= pathFolder.split('/').endItem;
    this.archive.directory(pathFolder, nameFolder);
    return this;
  }
  finalize( Function = () => { }, args=[] ) {
    this.archive.finalize();
    Function(...args)
  }
};
