function lastNOf(arr, count) {
    console.log(arr.slice(arr.length - count))
  }

  let digits = [4, 8, 15, 16, 23, 42];
  lastNOf(digits, 3);    // returns [16, 23, 42]