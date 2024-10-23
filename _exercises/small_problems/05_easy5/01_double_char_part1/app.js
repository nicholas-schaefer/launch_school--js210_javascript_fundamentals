const repeater = (segment) => (
    [...segment].map(([char]) => char.repeat(2)).join('')
)


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""