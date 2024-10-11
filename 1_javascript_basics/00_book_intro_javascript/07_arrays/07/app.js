function sumOfSquares(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0 )
}

let array = [3, 5, 7];

// let y = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 0
// )
// console.log(y)

// sumOfSquares(array)

console.log(sumOfSquares(array)); // => 83