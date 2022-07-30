module['exports'] = function (code) {
  const array = replace(code, '=-+*/?:|_><.,[{}]()&%$;')
    .split('\n')
    .filter(code => code.replace('\r', '') != '')
    .map(code => vars(code, ['const', 'let', 'var']))
    .reverse();

  array.map((code, i) =>
    (() => {
      if (
        code.startsWith('.') ||
        code.startsWith(':') ||
        code.startsWith(')') ||
        code.startsWith('?')
      ) {
        array[i + 1] += code;
        array[i] = '';
      }
    })()
  );
  const js = array
    .reverse()
    .map(code => (endsWith(code, '?:;{[|=&%(,.') || code == '' ? code : code + ';'))
    .join('');
};

function endsWith(code, ends) {
  let bool = false;
  for (let i = 0; i < ends.length; i++) bool ||= code.endsWith(ends[i]);
  return bool;
}
function vars(code, vars) {
  for (let i = 0; i < vars.length; i++)
    code = code.replace(new RegExp(`(${vars[i]}[{[])`, 'gi'), vars[i] + ' {');
  return code;
}
function replace(code, keywords) {
  for (let i = 0; i < keywords.length; i++)
    code = code.replace(new RegExp(`([\\s]*[${keywords[i]}][\\s]*)`, 'gi'), keywords[i]);
  return code;
}