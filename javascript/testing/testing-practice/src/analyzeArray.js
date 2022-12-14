function analyzeArray(arr) {}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

object ==
  {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

module.exports = analyzeArray;
