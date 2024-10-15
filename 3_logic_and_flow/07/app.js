isPrime = function isThisNumberPrime(input) {
    if (input < 2) return false;
    if (input % 2 === 0) return true;
    let maxToCheck = Math.floor(input / 2);

    for (i = 3; i <= maxToCheck; i+=2 ){
        let isMultiple = (input % i === 0);
        if (isMultiple) return false;
    }
    return true;
}


console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false



// Prime Check

// Write a function that takes a number argument,
// and returns true if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.