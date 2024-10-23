function halvsies(inputArray){

    let idxCounter = 0
    const elementsCount = inputArray.length;
    const solutionArray = [[], []];
    while(idxCounter < elementsCount){
        const el = inputArray[idxCounter];
        const indexToggle = idxCounter % 2;
        solutionArray[indexToggle].push(el);
        idxCounter +=1;
    }
    return solutionArray
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]