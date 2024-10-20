function reverse(input){
    let solutionArray = [];

    for (let i = 0; i < input.length; i +=1){
        solutionArray.push(input[i]);
    }
    console.log(solutionArray);
    return solutionArray;
}

NAMES = ['John', 'Wick', 'Keanu', 'Reeves'];

reverse(NAMES);