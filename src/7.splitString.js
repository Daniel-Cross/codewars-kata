const splitString = (s) => {

   const subStr = new RegExp('.{1,' + 3 + '}', 'g');
    const str = s.match(subStr).toString().replace(/,/g, ' ');
    return str;
   };


module.exports = splitString;
