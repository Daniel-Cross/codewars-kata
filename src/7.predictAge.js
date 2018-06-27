const predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => {

  let ageArr = [age1,age2,age3,age4,age5,age6,age7,age8];

  for(let i = 0; i < ageArr.length; i++) {
    ageArr[i] = ageArr[i] *= ageArr[i]
  };

 const sumAge = (total,num) => {return total + num}

  return Math.floor(Math.sqrt(ageArr.reduce(sumAge)) / 2);



};

module.exports = predictAge;
