const isPrime = function isThisNumberPrime(input) {
    if (input < 2) return false;
    if (input === 2) return true;
    if (input % 2 === 0) return false;
    let maxToCheck = Math.floor(input / 2);

    for (i = 3; i <= maxToCheck; i+=2 ){
        let isMultiple = (input % i === 0);
        if (isMultiple) return false;
    }
    return true;
}

const allPrimes = function calculateAllSmallerPrimes(max) {
    const allPrimes = []
    for (let i=2; i < max; i +=1){
        if ( !isPrime(i) ) continue;
        allPrimes.push(i);
    }
    return allPrimes;
}

const checkGoldbach = function findGlodbachConjectureNumbers(max) {
    let goldbachArray = []
    let primesArray = allPrimes(max);

    (function populateGoldbachArray() {
        let primesArray_length = primesArray.length;
        let half_of_input = Math.floor(max/2);
        for (i = 0; i < primesArray_length; i +=1) {
            for (j = 0; j < primesArray_length; j +=1) {
                let val1 = primesArray[i];
                let val2 = primesArray[j];
                if (val1 > half_of_input) return;
                if (val1 + val2 !== max) continue;
                goldbachArray.push([val1, val2])
            }
        }
    })();
    if (goldbachArray.length === 0) console.log(null);

    for (let subArray of goldbachArray ){
        console.log(subArray[0], subArray[1]);
    }
}


checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53