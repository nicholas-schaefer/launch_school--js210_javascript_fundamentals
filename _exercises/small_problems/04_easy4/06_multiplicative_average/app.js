function showMultiplicativeAverage(inputArray) {
    inputArrayLength = inputArray.length;
    const product = inputArray.reduce((acc, cur) => acc * cur);
    const quotient = product / inputArrayLength;

    return intTo3PaddedString(roundMaxThreePlaces(quotient));
}

function roundMaxThreePlaces(intToRound){
    return Math.round(intToRound * 1000) / 1000
}

function intTo3PaddedString(intToPad){
    const str = String(intToPad);
    const strLength = str.length
    const decimalIndex = str.search(/\./);

    if (decimalIndex === -1) return `${str}.000`;

    switch (strLength - decimalIndex){
        case 2:
            return `${str}00`;
        case 3:
            return `${str}0`;
        case 4:
            return str;
        default:
            return str.slice(0, decimalIndex + 4)
    }
}


console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"