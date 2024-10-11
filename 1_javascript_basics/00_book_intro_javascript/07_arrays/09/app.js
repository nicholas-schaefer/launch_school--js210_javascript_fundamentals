const test = {
    numbers1: [1, 3, 5, 7, 9, 11],
    numbers2: [],
    numbers3: [2, 4, 6, 8],
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


function isThreePresent(array){
    numberOfMatches =
        array
            .reduce((accumulator, currentValue) =>{
                if (currentValue === 3) accumulator.push(currentValue);
                return accumulator;
            }, [])
            .length
    return numberOfMatches !== 0
}

// console.log(isThreePresent(test.numbers1))
// console.log(isThreePresent(test.numbers2))
// console.log(isThreePresent(test.numbers3))

Object.values(test).forEach(
    (array)=>console.log(isThreePresent(array))
)


// Without using a for, while, or do/while loop,
// write some code that checks whether the number 3 appears inside these arrays: