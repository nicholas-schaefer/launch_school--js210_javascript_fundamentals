function areArraysEqual(array1, array2) {
    arr1Length = array1.length;
    arr2Length = array2.length;
    if (arr1Length !== arr2Length) return false;
    // reversedArray2 = [...array2].reverse();

    // function arraysReveredValuesEqual(){
    //     console.log(array1, reversedArray2)
    //     for (let i = 0; i < arr1Length; i += 1) {
    //         console.log(array1[i], reversedArray2[i])
    //         if (array1[i] === reversedArray2[i]) continue;
    //         return false;
    //     }
    //     return true;
    // }

    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)

    function arraysValuesEqual(){
        for (let i = 0; i < arr1Length; i += 1) {
            console.log(array1[i], array2[i])
            if (array1[i] === array2[i]) continue;
            return false;
        }
        return true;
    }

    return arraysValuesEqual();

}

//solution doesn't work on last test case, should have iterated and created combinations

function app(){
    // console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
    // console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
    // console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
    // console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
    // console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
    // console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
    // console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
    // console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
    // console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
    // console.log(areArraysEqual([1, 1], [1, 1]));                        // true
    console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true
}
app()