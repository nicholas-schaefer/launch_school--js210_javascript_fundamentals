// function negative(number) {
//     if (number === 0) return -0
//     return (number / 0 === Infinity) ? number : -number;
// }

function negative(num) {
    return num < 0 ? num : -num;
  }

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(-0));     // -0