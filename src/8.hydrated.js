const hydrated = (time) => {

  if(time >= 2) {
    return Math.floor(time / 2)
    } else {
    return 0
    };

};

module.exports = hydrated;
