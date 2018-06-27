const century = (year) => {

  const hundred = Math.ceil(year / 100)*100

  return (hundred / 100) * 1

};

module.exports = century;
