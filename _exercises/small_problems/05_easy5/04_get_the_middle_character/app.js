function centerOf(inputStr) {
    const inputLength = inputStr.length;
    if (inputLength <= 2) return inputStr;

    const inputIsOdd = inputLength % 2 == 1;
    let indexStart;
    let indexEnd;

    if (inputIsOdd) {
        indexStart = Math.floor(inputLength / 2);
        indexEnd = indexStart + 1;
    } else {
        indexStart = Math.floor(inputLength / 2) - 1;
        indexEnd = indexStart + 2;
    }

    return inputStr.slice(indexStart, indexEnd);
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"