function join(inArray, separator){
    return inArray.reduce((accumulator, currentValue)=>(
        accumulator = String(accumulator) + String(separator) + String(currentValue)
    ));
}


console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'