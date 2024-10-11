let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

// console.log(myArray.flat(Infinity))


solution = myArray
  .flat((Infinity))
  .filter((i)=> i%2 === 0)
  .forEach((i)=> console.log(i))

// solution.forEach((i)=> console.log(i));

// console.log(myArray);
// console.log(solution);