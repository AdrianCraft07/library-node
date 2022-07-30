declare class Lang{
  constructor(obj:Object)
  toString(): String;
  toObject(): Object;
  setLang(key: String, value: String): void;
  copy(): Lang;
  createFile(path: fs.PathLike): void;
}
export = Lang