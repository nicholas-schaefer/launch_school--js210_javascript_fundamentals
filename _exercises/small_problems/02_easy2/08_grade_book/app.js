function getGrade(...args){
    const sum = args.reduce((accumulator, currentValue)=> accumulator + currentValue);
    const avg = sum/args.length;
    switch(true){
        case avg < 60:
            return 'F';
        case avg < 70:
            return 'D';
        case avg < 80:
            return 'C';
        case avg < 90:
            return 'B';
        default:
            return 'A';
    }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"