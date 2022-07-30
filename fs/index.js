const fs = require('fs');

function readFile(path, type = '') {
  const file = fs.readFileSync;
  let res = Buffer('');
  if (isDirectory(path)) res = file(`${path}/index.${type}`);
  else if (path.endsWith(type) && isFile(path)) res = file(path);
  else if (isFile(`${path}.${type}`)) res = file(`${path}.${type}`);
  return res;
}

function removeDir(path) {
  const files = fs.readdirSync(path);
  files.filter(file => isDirectory(`${path}/${file}`)).map(dir => removeDir(`${path}/${dir}`));
  files.filter(file => isFile(`${path}/${file}`)).map(file => remove(`${path}/${file}`));
  fs.rmdirSync(path);
}
function remove(path) {
  fs.rmSync(path);
}
function removeDetect(path) {
  if (isFile(path) || isFolder(path))
    try {
      removeDir(path);
    } catch (e) {
      remove(path);
    }
}
function isDirectory(path) {
  try {
    fs.readdirSync(path);
    return true;
  } catch (e) {
    return false;
  }
}
function isFile(path) {
  try {
    fs.readFileSync(path);
    return true;
  } catch (e) {
    return false;
  }
}
function directory(path) {
  if (fs.existsSync(path)) return path;
  let pathSplit = path.split(/[\\/]/);
  directory(pathSplit.filter((_, index) => index < pathSplit.length - 1).join('/'));
  fs.mkdirSync(path);
  return path;
}
function file(path, data) {
  let pathSplit = path.split(/[/\\]/);

  fs.writeFileSync(
    `${directory(pathSplit.filter((_, index) => index < pathSplit.length - 1).join('/'))}/${
      pathSplit[pathSplit.length - 1]
    }`,
    data
  );
  return path;
}
module['exports'] = {
  removeDetect,
  isDirectory,
  directory,
  removeDir,
  readFile,
  remove,
  isFile,
  file,
};
