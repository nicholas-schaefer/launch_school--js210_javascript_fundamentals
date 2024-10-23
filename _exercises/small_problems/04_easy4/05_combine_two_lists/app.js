function interleave(arr1, arr2){
    const arr1length = arr1.length;
    const interleavedArray = [];

    for (let i = 0; i < arr1length; i +=1){
        interleavedArray.push(arr1[i], arr2[i]);
    }
    return interleavedArray
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

