function isPalindromicNumber(input) {
    const strInput = String(input);
    const inputLength = strInput.length;

    switch (inputLength){
        case 1:
            return true
        case 2:
            if (strInput[0] === strInput[1]) return true;
            break;
    }

    const halfInputLengthFloor =    Math.floor(inputLength / 2)
    const isInputLengthOdd =        inputLength % 2 == 1;

    const firstHalfStr =            strInput.slice(0, halfInputLengthFloor)
    const secondHalfStr =           isInputLengthOdd ? strInput.slice(halfInputLengthFloor + 1) : strInput.slice(halfInputLengthFloor)
    const reversedSecondHalfStr =   Array.from(secondHalfStr).reverse().join('');

    return firstHalfStr === reversedSecondHalfStr
    // return [strInput.slice(0, halfInputLengthFloor), strInput.slice(halfInputLengthFloor)]
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true