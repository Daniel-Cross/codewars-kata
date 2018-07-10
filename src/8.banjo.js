const banjo = (name) => {

  if(name.substring(0,1) === 'r' || name.substring(0,1) === 'R') {
    return name + " plays banjo"
    } else {
    return name + " does not play banjo"
    };
};

module.exports = banjo;
