declare class Zip {
  constructor(pathZip: String);
  append(text: String, nameFile: String): Zip;
  file(pathFile: String, nameFile: String): Zip;
  folder(pathFolder: String, nameFolder: String): Zip;
  finalize(): Zip
}
export = Zip