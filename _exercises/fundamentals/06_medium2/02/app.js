const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

function objectsEqual(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}


console.log(objectsEqual(person, otherPerson));

// console.log(Object.is(person === otherPerson));    // false -- expected: true