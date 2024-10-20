function shift(array) {
    if (array.length === 0) return undefined
    const itemToRemove = array[0];
    for (let i = 1; i < array.length; i += 1) {
        array[i-1] = array[i]
    }
    array.length = array.length -1;
    return itemToRemove
}


let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]