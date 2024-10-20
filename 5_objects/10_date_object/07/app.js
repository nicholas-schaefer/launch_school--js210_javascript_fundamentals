function ordinalEnding(int){
    const intUnder100 = Math.abs(intFromLastTwoDigits(int));
    if ([11,12,13].includes(intUnder100)) return 'th';

    const lastDigit = parseInt(String(intUnder100)[String(intUnder100).length -1], 10)
    if (lastDigit === 1) return 'st';
    if (lastDigit === 2) return 'nd';
    if (lastDigit === 3) return 'rd';
    return 'th';
}

function intFromLastTwoDigits(int){
    let isNegative = Math.sign(int) == -1;
    // console.log(int)
    while (String(int).length > 2 ){
        int = String(int).slice(1);
    }
    int = parseInt(int, 10);

    if (int === -0) return 0;
    return isNegative ? (int * -1): int
}

const dateSuffix = function ordinal(int) {
    return int + ordinalEnding(int);
}

// for (let i = -100; i <= 200; i+=1 ){
//     console.log(dateSuffix(i));
// }

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let today = new Date();


console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' + months[today.getMonth()] + ' ' + dateSuffix(today.getDate()));


// let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// let today = new Date();

// console.log("Today's day is " + String(daysOfWeek[today.getDay()]) + ' the ' + String(today.getMonth()) + 'th');