console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


function swapCase(input) {
  return input.split('').map((char)=>{
    const uppercasedChar = char.toUpperCase();
    return (uppercasedChar === char) ? char.toLowerCase() : uppercasedChar;
  }).join('');
}