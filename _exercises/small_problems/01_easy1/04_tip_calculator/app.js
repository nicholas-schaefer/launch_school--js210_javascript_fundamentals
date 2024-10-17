const readlineSync = require('readline-sync');

// Wait for user's response.
let bill = readlineSync.question('What is the bill? ');
let tipPercentage = readlineSync.question('What is the tip percentage? ');

let tip = Number((parseFloat(tipPercentage) * parseFloat(bill) / 100).toFixed(2));
let total = Number((Number(parseFloat(bill).toFixed(2)) + tip).toFixed(2));
console.log(tip, total);

// console.log(lengthMeters, widthMeters);