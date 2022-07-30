declare function input(
  ask?: String,
  value?: any,
  opts?: {
    echo: String;
    getCharacter: Boolean;
    autocomplete: { words: String[]; function: (arg: String) => String };
    onlyNumber: Boolean;
  }
):String;
declare function input(
  ask?: String,
  opts?: {
    value: any;
    echo: String;
    getCharacter: Boolean;
    autocomplete: { words: String[]; function: (arg: String) => String };
    onlyNumber: Boolean;
  }
):String;
declare function input(opts?: {
  ask: String;
  value: any;
  echo: String;
  getCharacter: Boolean;
  autocomplete: { words: String[]; function: (arg: String) => String };
  onlyNumber: Boolean;
}):String;
export = input