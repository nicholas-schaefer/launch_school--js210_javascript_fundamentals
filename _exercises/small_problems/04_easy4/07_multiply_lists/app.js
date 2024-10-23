const multiplyList = (...inputArrays) =>{
    const commonArrayLength = inputArrays[0].length;

    let newlyMultipliedArray = []
    for (let i = 0; i < commonArrayLength; i +=1){
        newlyMultipliedArray.push(inputArrays[0][i] * inputArrays[1][i]);
    }

    if (inputArrays.length <= 2) return newlyMultipliedArray

    inputArrays.splice(0,2);
    inputArrays.unshift(newlyMultipliedArray);

    return multiplyList(...inputArrays)
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
console.log(multiplyList([3, 5, 7], [9, 10, 11], [2,2,2]));    // [54, 100, 154]