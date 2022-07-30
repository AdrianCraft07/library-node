declare global {
  interface Array {
    toObject(): Object;
    _toString(): String;
    search(): String;
    keys(): String[];
    deleteIndex(): T[];
    getData(): any[];
    max(): T[];
    dataExists(): Boolean;
    end(): Number;
    endItem(): T;
    endDelete(): T[];
    compare(): Boolean;
  }
}
