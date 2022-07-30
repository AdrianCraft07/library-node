module['exports'] = function(colors) {
  return function(letter, i) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};
