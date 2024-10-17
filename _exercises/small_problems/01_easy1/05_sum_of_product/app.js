const readlineSync = require('readline-sync');

function createArrayOfInts(bottom, top){
    let arrayInts = [];
    for (let i = bottom; i <= top; i +=1){
        arrayInts.push(i);
    }
    return arrayInts;
}

function sumIntsInRange(bottom, top){
    let arrayInts = createArrayOfInts(bottom, top)

    return arrayInts.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
    },0);
}

function productIntsInRange(bottom, top){
    let arrayInts = createArrayOfInts(bottom, top)

    return arrayInts.reduce((accumulator, currentValue) =>{
        return accumulator * currentValue
    },1);
}

// console.log(sumIntsInRange(1,5));
// console.log(productIntsInRange(1,3));


function app() {
    let inputEnterNumber = readlineSync.question('Please enter an integer greater than 0: ');
    chosenNumber = parseInt(inputEnterNumber, 10);
    if( isNaN(chosenNumber) || chosenNumber <= 0) {
        console.log('positive integer, you ijit')
        return;
    }

    let inputChooseOperation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
    let operation;
    let result;

    switch(inputChooseOperation){
        case 's':{}
            operation = 'sum';
            result = sumIntsInRange(1,chosenNumber);
            break;
        case 'p':
            operation = 'product'
            result = productIntsInRange(1,chosenNumber);
            break;
        default:
            console.log('s or p, you ijit')
            return;
    }
    console.log(`The ${operation} of the integers between 1 and ${chosenNumber} is ${result}.`)
    // return [operation, result];
}


app();