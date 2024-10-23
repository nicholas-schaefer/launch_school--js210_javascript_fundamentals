function sequence(argInt){

    const sequenceArr = []
    for ( let i = 1; i <= argInt; i +=1 ){
        sequenceArr.push(i)
    }
    return sequenceArr
}


console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

