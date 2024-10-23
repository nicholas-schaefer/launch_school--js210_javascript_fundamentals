const randomNumber = function generateRandomNumberBetween(min, max){
    if (min === max) return min;
    if (min > max){
        [min, max] = [max, min]
    }
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return `Teddy is ${randomNumber} years old!`;
}



// console.log(randomNumber(3,3))