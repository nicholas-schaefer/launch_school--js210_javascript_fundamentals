'use strict'

let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question("How old are you?\n"));

// const currentAge = 22
console.log(`You are ${currentAge} years old.`)

for (let yft = 10; yft <= 40; yft += 10) {
    let futureAge = currentAge + yft;
    console.log(`In ${yft} years, you will be ${futureAge} years old.`);
}