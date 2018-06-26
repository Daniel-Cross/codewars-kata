const triangle = (a, b) => {

  const c = a + b;
  const darts = 180 - c;

  return darts;
};

module.exports = triangle;
