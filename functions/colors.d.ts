export function bold(text: String): String;
export function inverse(text: String): String;
export function black(text: String): String;
export function red(text: String): String;
export function green(text: String): String;
export function yellow(text: String): String;
export function blue(text: String): String;
export function magenta(text: String): String;
export function cyan(text: String): String;
export function white(text: String): String;
export function gray(text: String): String;
export function grey(text: String): String;
export function redBright(text: String): String;
export function greenBright(text: String): String;
export function yellowBright(text: String): String;
export function blueBright(text: String): String;
export function magentaBright(text: String): String;
export function cyanBright(text: String): String;
export function whiteBright(text: String): String;
export function blackBg(text: String): String;
export function redBg(text: String): String;
export function greenBg(text: String): String;
export function yellowBg(text: String): String;
export function blueBg(text: String): String;
export function magentaBg(text: String): String;
export function cyanBg(text: String): String;
export function whiteBg(text: String): String;
export function greyBg(text: String): String;
export function redBrightBg(text: String): String;
export function greenBrightBg(text: String): String;
export function yellowBrightBg(text: String): String;
export function blueBrightBg(text: String): String;
export function magentaBrightBg(text: String): String;
export function cyanBrightBg(text: String): String;
export function whiteBrightBg(text: String): String;

declare global {
  interface String {
    bold: String;
    inverse: String;

    black: String;
    red: String;
    green: String;
    yellow: String;
    blue: String;
    magenta: String;
    cyan: String;
    white: String;
    gray: String;
    grey: String;

    redBright: String;
    greenBright: String;
    yellowBright: String;
    blueBright: String;
    magentaBright: String;
    cyanBright: String;
    whiteBright: String;

    blackBg: String;
    redBg: String;
    greenBg: String;
    yellowBg: String;
    blueBg: String;
    magentaBg: String;
    cyanBg: String;
    whiteBg: String;
    greyBg:  String;

    redBrightBg: String;
    greenBrightBg: String;
    yellowBrightBg: String;
    blueBrightBg: String;
    magentaBrightBg: String;
    cyanBrightBg: String;
    whiteBrightBg: String;

    clear: String;
    styles: String
  }
}
