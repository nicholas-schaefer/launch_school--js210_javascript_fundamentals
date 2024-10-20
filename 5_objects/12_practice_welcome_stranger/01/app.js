const greetings = function createGreeting(partsOfName, personInfo) {
    return `Hello, ${partsOfName.join(' ')}! Nice to have a ${personInfo.title} ${personInfo.occupation} around.`;
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.