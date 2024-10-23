function whenCanYouRetire(yourAge, desiredRetirementAge){
    const currentYear = new Date().getFullYear();
    const yearsToRetirement = desiredRetirementAge - yourAge;
    const retirementYear = currentYear + yearsToRetirement;

    let msg = []
    msg.push(`It's ${currentYear}. You will retire in ${retirementYear}.`);
    msg.push(`You have only ${yearsToRetirement} years of work to go!`);

    return msg.join(`\n`);
}

console.log(whenCanYouRetire(30, 70));