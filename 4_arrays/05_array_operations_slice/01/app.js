function slice(inputArray, startIndex, endIndex){
    let newArray = [];

    for (let i = startIndex; i < endIndex; i +=1){
        newArray.push(inputArray[i]);
    }
    return newArray;
};



console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]