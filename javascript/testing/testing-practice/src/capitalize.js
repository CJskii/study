function capitalize(string) {
  // capitalize first letter
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      str += string[i].toUpperCase();
    } else {
      str += string[i].toLowerCase();
    }
  }
  return str;
}

module.exports = capitalize;
