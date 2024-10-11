function oddLengths(array) {
    return array.reduce((accumulator, currentValue, index) => {
      console.log(`Iteration ${index}: Processing ${currentValue}`);
      if (typeof currentValue === 'string' && currentValue.length % 2 !== 0) {
        accumulator.push(currentValue.length);
      }
      return accumulator;
    }, []);
  }

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]












// Write a function similar to the oddLengths function from Exercise 6,
// but don't use map or filter. Instead, try to use the reduce method.