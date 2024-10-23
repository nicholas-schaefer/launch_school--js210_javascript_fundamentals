function isRealPalindrome(input) {
    lowercasedInput =           input.toLowerCase()

    let charsArray =            Array.from(lowercasedInput);
    let filteredCharsArray =    charsArray.filter((char) => char.search(/[A-Z]|\d/i) !== -1);
    let filteredCharsLength =   filteredCharsArray.length;

    let halfFloor =             Math.floor(filteredCharsLength / 2)
    let firstHalfArray =        filteredCharsArray.slice(0, halfFloor);
    let secondHalfArray =       filteredCharsArray.slice(filteredCharsLength - halfFloor);

    return firstHalfArray.join('') === secondHalfArray.reverse().join('')
}




console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false