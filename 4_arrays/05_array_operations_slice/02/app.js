function splice(inputArray, beginCutIdx, charsToCut){
    let solutionArray = [];
    let inputArrayLengthBeforeCut = inputArray.length

    for (let idx = 0; idx < inputArrayLengthBeforeCut; idx +=1){
        if (idx < beginCutIdx){
            solutionArray.push(inputArray.shift());
        }
    }
    for (const el of inputArray.slice(charsToCut)){
        solutionArray.push(el);
    }

    inputArray.length = charsToCut;
    return solutionArray;
}


let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]