const readlineSync = require('readline-sync');

function searching101() {
    const NUMBERS = {'1': '1st', '2': '2nd', '3': '3rd', '4': '4th', '5': '5th', '6': 'last'}
    const userNumbers = []

    let i = 1;
    while (i <= 6 ){
        const userInput = readlineSync.question(`Enter the ${NUMBERS[i]} number:`);
        const userNumber = parseFloat(userInput, 10)
        const validNumber = !!userNumber;
        if (validNumber){
            userNumbers.push(userNumber);
            i += 1;
        } else{
            console.log('Invalid input, Try again');
        }
    }
    const userNumbersLength = userNumbers.length;

    const numbersFirstFive = userNumbers.slice(0, userNumbersLength -1);
    const numberLast = userNumbers.slice(userNumbersLength -1)[0];
    const lastNumberFound = numbersFirstFive.includes(numberLast);

    const message = []
    message.push(`The number ${numberLast}`);
    message.push(lastNumberFound ? 'appears in' : "doesn't appear in");
    message.push(`[${numbersFirstFive.join(', ')}].`);

    return message.join(' ');
}

console.log(searching101());