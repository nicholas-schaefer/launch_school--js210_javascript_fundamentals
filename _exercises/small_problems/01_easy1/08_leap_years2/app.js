const isFactor = function isEvenlyDivisibleBy(firstInt, secondInt){
    return firstInt % secondInt === 0;
}

function isLeapYear(input) {
    const GREGORIAN_CALENDAR_START_YEAR = 1752;
    const yearIsOnGregorianCalendar = input >= GREGORIAN_CALENDAR_START_YEAR;
    switch (yearIsOnGregorianCalendar){
        case true:
            if (isFactor(input, 400)) return true;
            if (isFactor(input, 100)) return false;
        default:
            return isFactor(input, 4);
    }
}





console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true