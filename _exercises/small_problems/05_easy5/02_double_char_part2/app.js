const doubleConsonants = (inputStr) => (
    [...inputStr].map(char => (
        isCharConsonant(char) ? char.repeat(2) : char
    )).join('')
);

const isCharConsonant = (char) =>{
    const isCharLetter = char.search(/[a-z]/i) === 0;
    if (!isCharLetter) return false;

    return char.search(/[^aeiou]/i) === 0;
}

// console.log(isCharConsonant('A'));
// console.log(isCharConsonant('a'));
// console.log(isCharConsonant('e'));
// console.log(isCharConsonant('b'));
// console.log(isCharConsonant(' '));
// console.log(isCharConsonant('"'));


// const repeater = (segment) => (
//     [...segment].map(([char]) => char.repeat(2)).join('')
// )


// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""