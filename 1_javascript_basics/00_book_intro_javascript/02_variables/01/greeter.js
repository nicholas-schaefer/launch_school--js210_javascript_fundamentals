"use strict";
let userName = "Victor";
const timeOfDay = ["morning", "afternoon", "evening"];
Object.freeze(timeOfDay)

timeOfDay[0] = "spinach";

console.log(timeOfDay);

// console.log(timeOfDay);

// let greeting = "hi"

// for (let i=0; i<3; i++) {
//     console.log(`Good ${timeOfDay[i]} ${userName}.`);
// }
// console.log("------");

// timeOfDay.forEach( (time) =>console.log(`Good ${time}} ${userName}.`))


// let int = 0
// while (int < 3){
//     console.log(userName);
//     int++;
// }