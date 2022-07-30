'use strict';
require('../Extension');

function toValue(value) {
  let regex = [
    /^([Ff][Aa][Ll][Ss][Ee])?([Nn]([Oo][Tt]?)?)?$/,
    /^([Tt][Rr][Uu][Ee])?([Yy]([Ee][Ss])?)?$/,
    /^([0-9])*(.[0-9]*)?$/,
  ];
  if (regex[0].test(value)) return false;
  else if (regex[1].test(value)) return true;
  else if (regex[2].test(value)) return +value;
  return value;
}
function string(value) {
  return typeof value != 'string'
    ? value
    : value
        .replace(/"?'?/, '')
        .reverse()
        .replace(/"?'?/, '')
        .reverse()
        .replaceFull(['\\n:\n', '\\s:s', '\\t:\t', '\\\\:\\']);
}

function getParam(param) {
  return string(
    toValue(
      Object.fromEntries(
        process.argv
          .filter((_, index) => index > 1)
          .join(' ')
          .replaceAll(' -', ',-')
          .split(',')
          .map(value => {
            value = value.replace(/[\s]*=[\s]*/, '=').split('=');
            let key = value[0];
            value = value.filter((_, index) => index > 0).join('');
            return [key, value];
          })
          .map(value => (value[1] == undefined ? [...value, null] : value))
      )[param]
    )
  );
}
getParam.toValue = toValue;
getParam.string = string;
module['exports'] = getParam;
