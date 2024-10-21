const DIGITS = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
};

function stringToSignedInteger(input) {
    if (input === '0' || input === '+0' || input === '-0') return 0;

    const firstChar = input[0];
    const isNegative = (firstChar === '-');

    if (isNegative || firstChar === '+'){
        input = input.slice(1);
    }

    let absoluteInteger = stringToInteger(input);

    return isNegative ? absoluteInteger * -1 : absoluteInteger;

    // const isPositive (input[0] !== '-'){}
}

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


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-0'));      // -570
console.log(stringToSignedInteger('+100'));      // 100