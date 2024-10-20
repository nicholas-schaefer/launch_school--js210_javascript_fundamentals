function missing(inputArray){
    const min = Math.min(...inputArray)
    const max = Math.max(...inputArray)

    let numToAdd = min;

    const solutionArray = [];

    while (numToAdd < max){
        if (inputArray.includes(numToAdd) === false) {
            solutionArray.push(numToAdd);
        }
        numToAdd +=1;
    }

    console.log(solutionArray);
}


missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []