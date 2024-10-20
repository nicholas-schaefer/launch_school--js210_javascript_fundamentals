function indexOf(array, value){
    // if (array.length ===0) return -1;
    for (let idx = 0; idx < array.length -1; idx += 1){
        if (value === array[idx]) return idx;
    }
    return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1