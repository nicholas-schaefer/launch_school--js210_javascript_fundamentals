function slice(array, begin, end) {
    const arrayLength = array.length;
    if (end === undefined || end > arrayLength){
        end = arrayLength;
    }
    // console.log(array, begin,end)

    const slicedArray = []
    for(let i = begin; i < end; i+=1){
        slicedArray.push(array[i])
        // console.log(i)
    }
    // console.log(slicedArray)
    return slicedArray
}

//   slice([1, 2, 3], 1, 2);               // [2]
//   slice([1, 2, 3], 2, 0);               // []
//   slice([1, 2, 3], 5, 1);               // []
//   slice([1, 2, 3], 0, 5);               // [1, 2, 3]

//   const arr1 = [1, 2, 3];
//   slice(arr1, 1, 3);                     // [2, 3]
//   console.log(arr1);


function splice(array, start, deleteCount, ...args) {
    const arrayLength = array.length;
    if (deleteCount >= arrayLength){
        deleteCount = arrayLength - start;
    }

    let arrayForReturn = []
    for( let i = 0 ; i < deleteCount; i+=1){
        arrayForReturn.push(array[start + i]);
    }

    // console.log(array, start, deleteCount);

    let endSlice = slice(array, start + deleteCount);
    array.length = start + deleteCount;

    for (let i = 0; i < deleteCount; i +=1){
        array.pop()
    }
    array.push(...endSlice);

    // console.log(array)
    return arrayForReturn
    // for (let i = 0; i < deleteCount; i+=1){
    //     console.log('idx_' + i, array[i]);
    // }
  }

//   console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
//   console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
//   console.log(splice([1, 2, 3], 1, 0));              // []
//   console.log(splice([1, 2, 3], 0, 1));              // [1]
//   console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

  const arr2 = [1, 2, 3];
  console.log(splice(arr2, 1, 1, 'two'));             // [2]
//   console.log(arr2);                                  // [1, "two", 3]

//   const arr3 = [1, 2, 3];
//   splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
//   arr3;                                  // [1, "two", "three"]

//   const arr4 = [1, 2, 3];
//   splice(arr4, 1, 0);                    // []
//   splice(arr4, 1, 0, 'a');               // []
//   arr4;                                  // [1, "a", 2, 3]

//   const arr5 = [1, 2, 3];
//   splice(arr5, 0, 0, 'a');               // []
//   arr5;                                  // ["a", 1, 2, 3]