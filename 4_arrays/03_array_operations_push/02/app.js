function pop(array){
    let elToDestroy = array[array.length -1];
    if (array.length === 0) return;
    array.length = array.length -1;
    return elToDestroy;
}


let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]