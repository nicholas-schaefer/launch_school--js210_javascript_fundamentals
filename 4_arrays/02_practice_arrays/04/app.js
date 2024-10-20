const myJoin = ((input) =>
    input.reduce((accumulator, currentValue) => accumulator + String(currentValue), "")
);

INPUT = [1, 'a', 4];

console.log(myJoin(INPUT));