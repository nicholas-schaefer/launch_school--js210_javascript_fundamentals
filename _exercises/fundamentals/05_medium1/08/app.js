function productOfSums(array1, array2) {
    let result = total(array1) * total(array2);
    return result;
}

function total(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }

    return sum;
}


const thing1 = [1,3,5];
const thing2 = [2,4];

console.log(productOfSums(thing1, thing2));


// productOfSums(thing1, thing2)