function pop(inputArray){
    const initialLength = inputArray.length;
    if (initialLength === 0) return;
    const charToPop = inputArray[initialLength -1];

    inputArray.length = initialLength -1;
    return charToPop;
}

function push(inputArray1, ...pushArgs){
    const solutionArray = [];
    const array2 = pushArgs.flat(Infinity)
    // console.log(inputArray1)
    // console.log(array2)

    solutionArray.concat(...inputArray1, ...array2)
    console.log(solutionArray)

    console.log('\n');
    // const initialLength = inputArray.length;
    // if (initialLength === 0) return;
    // const charToPop = inputArray[initialLength -1];

    // inputArray.length = initialLength -1;
    // return charToPop;
}

// push
// const array2 = [1, 2, 3];
// push(array2, 4, 5, 6);              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
// push([], 1);                       // 1
// push([]);                          // 0


// pop
// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]