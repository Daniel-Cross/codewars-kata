const xo = (str) => {


  const x = (str.match(/x/gi)||[]).length;
  const o = (str.match(/o/gi)||[]).length;

  function result () {
    if (x === o) {
    return true
    } else {
    return false
    }

  };
return result()

};

module.exports = xo;
