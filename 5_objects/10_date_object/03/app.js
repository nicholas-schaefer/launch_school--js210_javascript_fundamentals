let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let today = new Date();

console.log("Today's day is " + String(daysOfWeek[today.getDay()]));