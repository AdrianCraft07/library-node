module['exports'] = function uuid() {
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (count) {
    let Time = new Date().getTime();
    let random = (Time + Math.random() * 16) % 16 | 0;
    return (count === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
  return uuid;
}