module['exports'] = function(colors) {
  var available = ['grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'yellowBright', 'redBright',
    'greenBright', 'blueBright', 'whiteBright', 'cyanBright', 'magentaBright'];
  return function(letter, i) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};
