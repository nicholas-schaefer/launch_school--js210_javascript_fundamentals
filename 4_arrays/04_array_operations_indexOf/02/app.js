function lastIndexOf(array, value){
    // if (array.length ===0) return -1;
    for (let idx = array.length -1; idx > 0; idx -= 1){
        if (value === array[idx]) return idx;
    }
    return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1