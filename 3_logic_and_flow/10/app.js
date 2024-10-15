const readlineSync = require('readline-sync');

const requestScore = function promptForPassword(numberScore){
    const msg = {
        'prompt':   `Enter score ${numberScore}:`,
        'error':    'Error, Valid Integer required. Try again',
    }
    while (true) {
        let userInput = parseInt(readlineSync.question(msg.prompt));
        if (isNaN(userInput)) {
            console.log(msg.error)
            continue;
        }
        return userInput
    }
}

const requestScores = function promptForMultipleScores(numberOfScores){
    let scores = [];
    for (i = 1; i <= numberOfScores; i+=1){
        scores.push(requestScore(i));
    }
    return scores
}

const scoresAverage = function calculateAverageFromScores(numberOfScores){
    let arrayOfScores = requestScores(numberOfScores)
    let sumOfScores = arrayOfScores.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
    }, 0)
    return sumOfScores / numberOfScores
}

const calculateGrade = function calculateGradeFromScores(numberOfScores){
    let averageScore = scoresAverage(numberOfScores);
    let grade;
    switch(true){
        case (averageScore < 50):
            grade = 'f';
            break;
        case (averageScore < 70):
            grade = 'c';
            break;
        case (averageScore < 90):
            grade = 'b';
            break;
        default:
            grade = 'a';
    }
    return grade;
}

const whatsMyGrade = function calculateGradeAndMessage(numberOfScores = 3){
    const grade = calculateGrade(numberOfScores);
    const msg = `Based on the average of your ${numberOfScores} scores your letter grade is "${grade.toUpperCase()}".`
    console.log(msg);
}

whatsMyGrade();