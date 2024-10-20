function reverse(inputForReversal) {
    if (Array.isArray(inputForReversal)) {
        return [...inputForReversal].reverse();
    } else {
        return Array.from(inputForReversal).reverse().join('');
    }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]