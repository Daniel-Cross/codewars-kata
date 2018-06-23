const codeMeet = (list) => {

  return list.filter((js) => {
    return js.continent === 'Europe' && js.language === 'JavaScript'
    }).length

};


module.exports = codeMeet;
