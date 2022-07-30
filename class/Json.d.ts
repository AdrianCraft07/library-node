declare class Json {
  constructor(obj: Object | Array | String);
  toObject(): Object;
  toString(): String;
  copy(): Json;
  compare(Json:Json): Boolean;
  createFile(path: fs.PathLike): void;
}
export  = Json