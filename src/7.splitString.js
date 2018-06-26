const splitString = (s, partLength) => {

   let subStr = new RegExp('.{1,' + partLength + '}', 'g');
    return s.match(subStr).toString().replace(/,/g, ' ');

   };


module.exports = splitString;
