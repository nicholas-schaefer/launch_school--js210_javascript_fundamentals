//returns array of divisors sorted highest to lowest
const gd = function getDivisors(target) {
    let half = Math.floor(target / 2);
    let divisorsArray = [];
    for (i = 1; i <= half; i += 1) {
        let targetDividedByi = target / i;
        let isMultiple = parseInt(targetDividedByi) === targetDividedByi;
        if (isMultiple) divisorsArray.push(targetDividedByi);
    }
    divisorsArray.push(1);
    return divisorsArray;
}

const gcd = function getGreatestCommonDivisor(int1, int2) {
    let largerIntDivisorsArray = ((int1 >= int2) ? (gd(int1)) : gd(int2));
    let smallerIntDivisorsArray = ((int1 < int2) ? (gd(int1)) : gd(int2));

    largerIntDivisorsArray.sort((a, b) => b - a);
    smallerIntDivisorsArray.sort((a, b) => b - a);
    for (i of largerIntDivisorsArray) {
        if (smallerIntDivisorsArray.includes(i)) {
            console.log(i);
            return i;
        }
        // console.log(i, smallerIntDivisorsArray.includes(i));
    }
}



console.log(gcd(12, 4));   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

// Create a function that computes the Greatest Common Divisor of two positive integers.