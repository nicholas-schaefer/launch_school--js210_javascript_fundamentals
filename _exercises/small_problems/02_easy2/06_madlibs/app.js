const readlineSync = require('readline-sync');

function madlibs(){
    const noun = readlineSync.question('Enter a noun: ');
    const verb = readlineSync.question('Enter a verb: ');
    const adjective = readlineSync.question('Enter a adjective: ');
    const adverb = readlineSync.question('Enter a adverb: ');

    console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
}

madlibs();