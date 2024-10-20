function concat (arr1, arr2) {

    return arr2.reduce((accumulator, currentValue)=>{
        accumulator.push(currentValue);
        return accumulator;
    }, [...arr1]);
}


console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]