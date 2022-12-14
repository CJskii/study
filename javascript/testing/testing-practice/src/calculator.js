const calculator = {
  add: (a, b) => {
    return a + b;
  },
  substract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    if (a === 0) return 0;
    if (b === 0) return null;
    else return a / b;
  },
};

module.exports = calculator;
