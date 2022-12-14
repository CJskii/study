let alphabet = "abcdefghijklmnopqrstuvwxyz"; // index 0 - 25
let alphabet2 = alphabet.toUpperCase();

function cipher(string, shift) {
  let newString = "";
  let index;
  //string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    const lowCase = string[i] === string[i].toLowerCase();
    // Lower case
    if (lowCase === true) {
      index = alphabet.indexOf(string[i]);
      if (string[i] == " ") {
        // condition for space
        newString += string[i];
      } else if (index + shift > alphabet.length - 1) {
        // go back to start of the alphabet
        newString += alphabet[shift - (alphabet.length - index)];
      } else {
        // shift as usual
        newString += alphabet[index + shift];
      }
    } else {
      // Upper case
      index = alphabet2.indexOf(string[i]);
      // overflow values
      if (index + shift > alphabet2.length - 1) {
        newString += alphabet2[shift - (alphabet2.length - index)];
      } else {
        newString += alphabet2[index + shift];
      }
    }
  }
  return newString;
}
module.exports = cipher;
