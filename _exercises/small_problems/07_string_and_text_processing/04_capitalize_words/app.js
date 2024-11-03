console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


function wordCap(input) {

  let capitalizeNextCharToggle = true;

  const transformedArray = input.split('').map((char) => {
    const charIsWhitespace = char === ' ';
    if (charIsWhitespace) {
      capitalizeNextCharToggle = true;
      return ' ';
    }
    if (capitalizeNextCharToggle) {
      capitalizeNextCharToggle = false;
      return char.toUpperCase();
    }

    return char;
  });
  return transformedArray.join('');
}