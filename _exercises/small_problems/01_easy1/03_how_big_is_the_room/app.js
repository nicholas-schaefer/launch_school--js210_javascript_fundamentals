const readlineSync = require('readline-sync');
const SQUARE_FEET_IN_SQUARE_METER = 10.7639;

// Wait for user's response.
let lengthMeters = readlineSync.question('Enter the length of the room in meters:');
let widthMeters = readlineSync.question('Enter the width of the room in meters:');

let squareMeters = parseFloat(lengthMeters) * parseFloat(widthMeters);
let squareFeet = squareMeters * SQUARE_FEET_IN_SQUARE_METER;
console.log(Math.round(squareFeet*100)/100);

// console.log(lengthMeters, widthMeters);