function evenOrOdd(i){
    // isNumber = typeof(i) === 'number'
    // if (!isNumber) return false
    if (!Number.isInteger(i)) {
        console.log('Sorry, the value you passed is not an integer');
        return;
      }
    return !!(i % 2) ? "odd" : "even"
}

let numToCheck = 2
console.log(evenOrOdd(numToCheck))

// is argument even?
//