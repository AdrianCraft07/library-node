import { Json } from '../class/Json';
declare global{
  interface String{
    createFile(path: fs.PathLike): String;
    replaceFull(replaces: String, sign: String): String;
    reverse():String
    toJson():Json
    toObject():Object
    toRegExp(flags: 'i' | 'g' | 'gi'): RegExp
    setLength(length:Number): String
  }
}