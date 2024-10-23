function runningTotal(inputArray){
    const runningArray = []
    const inputArrayLength = inputArray.length;

    for (let i = 0; i <= inputArrayLength; i +=1 ){
        const subArray = inputArray.slice(0, i);
        if (subArray.length === 0) continue;
        const total = subArray.reduce((acc, cur) => acc + cur, 0)
        runningArray.push(total);
    }
    console.log(runningArray)
}




runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []