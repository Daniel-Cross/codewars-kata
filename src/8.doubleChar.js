const doubleChar = (str) => {

  const ssttrr = str.split('').map(function(d) {
    return d + d;
    }).join('');
    return ssttrr;
};

module.exports = doubleChar;
