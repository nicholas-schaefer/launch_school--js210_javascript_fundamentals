function multiplesOfThreeAndFive() {
    const setOfMultiples = new Set();

    for (let i = 3; i <=100; i += 3){
        setOfMultiples.add(i);
    }
    for (let i = 5; i <=100; i += 5){
        setOfMultiples.add(i);
    }

    const arrayOfMultiples = Array.from(setOfMultiples)
    arrayOfMultiples.sort((a,b)=> a - b)

    arrayOfMultiples.reduce((_accumulator, currentValue)=>{
        if (currentValue % (3*5) === 0) {
            console.log(String(currentValue) + '!')
        } else {
            console.log(String(currentValue))
        }
    }, 0)
}


multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity

/*
Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5.
If the number is divisible by both 3 and 5, append an "!" to the number.
*/

/*
PEDAC
Problem - above
exampes above
data structure - array maybe?
algorithim
Find higher of two numbers that need to be incremented (5)
Iterate over higher number up into highest limit (100)
 - check if each number is a multiple of the lower number
        - no, log number, converted to string
        - yes, log

*/
