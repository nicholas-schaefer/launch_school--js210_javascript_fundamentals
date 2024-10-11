
const oddLengths = ((array) =>
    array
        .filter((e) => e.length % 2 === 1)
        .map((e) => e.length)
)



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

