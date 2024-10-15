const readlineSync = require('readline-sync');

const masterPassword = 'password';
const loginAttemptsLimit = 3;
const messages = {
    'success':  'You have successfully logged in.',
    'denied':   'You have been denied access.',
    'booted':   'You are a failure - Goodbye',
}

const requestPassword = function promptForPassword(){
    return readlineSync.question('What is the password: ');
}

function attemptToAuthorize (){
    let userInput;
    let userLoginAttemptCounter = 0;

    do {
        userInput = requestPassword();
        if (userInput == masterPassword){
            return console.log(messages.success)
        }
        console.log(messages.denied)
        userLoginAttemptCounter += 1
        // console.log(userInput, userLoginAttempts );
    } while (userLoginAttemptCounter < loginAttemptsLimit)
    console.log(messages.booted)
}

attemptToAuthorize()