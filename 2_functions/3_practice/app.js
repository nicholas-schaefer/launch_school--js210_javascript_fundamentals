function sum(...array_ints){
    return array_ints.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    }, 0)
}

function average(...array_ints){
    let element_count = array_ints.length
    let total = sum(...array_ints)
    return total / element_count
}

console.log(average(5,7,9));


console.log(sum(5,7,9));