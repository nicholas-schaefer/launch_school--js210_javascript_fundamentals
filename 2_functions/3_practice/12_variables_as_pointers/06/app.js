let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord; ['Hi', 'Goodbye']
myWord = 'Hello';

console.log(myWords); //['Hi', 'Goodbye']
console.log(myWord); //'Hello';