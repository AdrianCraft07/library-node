import { Json } from '../class/Json';
declare global {
  interface Object {
    toJson(): Json;
    _toString(): String;
    toArray(): Array;
    keys(): Array;
    compare(obj: Object):Boolean;
    getData(route: String): any;
    push(key: String, value: any): Object;
    delete(key: String): Object;
    search(item: any): Array;
  }
}
