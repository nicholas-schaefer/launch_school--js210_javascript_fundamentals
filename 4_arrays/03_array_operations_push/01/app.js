function push(inputArray, secondThing){
    inputArray[inputArray.length] = secondThing;
    return inputArray[inputArray.length];
}



let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

clg