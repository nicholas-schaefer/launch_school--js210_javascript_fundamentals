const stringy = ((length) =>{
    solutionString = ""
    let displayZeroNext = true;

    for (let i = 0; i < length; i+=1 ) {
        solutionString += Number(displayZeroNext)
        displayZeroNext = !displayZeroNext;
    }
    return solutionString;
});

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"