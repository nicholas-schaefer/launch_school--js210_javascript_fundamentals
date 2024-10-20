function shift(inputArray) {
    const INPUT_ARRAY_INITIAL_LENGTH = inputArray.length;
    if (INPUT_ARRAY_INITIAL_LENGTH === 0) return;

    const charToShift = inputArray[0]
    inputArray.reverse()
    inputArray.length = INPUT_ARRAY_INITIAL_LENGTH -1;
    inputArray.reverse()

    return charToShift
}

function unshift(inputArray1, ...inputArray2){
    inputArray1.reverse()
    inputArray2.reverse()
    inputArray1.push(...inputArray2)
    inputArray1.reverse()

    return inputArray1.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]