'use strict'
const currentAge = 20;


function calculateFutureAge(currentAge, yearsFromNow){
    return currentAge + yearsFromNow
}


for (let yearsFromNow=10; yearsFromNow <= 40; yearsFromNow +=10 ){
    let futureAge = calculateFutureAge(currentAge, yearsFromNow);
    console.log(`In ${yearsFromNow} years, you will be ${futureAge} years old.`);
}
