const DIGITS = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};


function stringToInteger(input) {
    const digitsArray = Array.from(input).map((char) =>
        DIGITS[char]
    );
    const digitsLength = digitsArray.length;
    let sum = 0;
    for (let i = 0; i < digitsLength; i += 1) {
        let power = digitsLength - 1 - i;
        sum += digitsArray[i] * Math.pow(10, power);
    }
    return sum;
}



console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570