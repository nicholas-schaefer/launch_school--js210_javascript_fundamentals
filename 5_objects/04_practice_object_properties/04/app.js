function wordCount(inputString){

    return inputString.split(' ').reduce((accumulator, currentValue) =>{
        if (accumulator[currentValue] === undefined) {
            accumulator[currentValue] = 1;
        }else{
            accumulator[currentValue] += 1;
        }
        return accumulator;
    },{})
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }