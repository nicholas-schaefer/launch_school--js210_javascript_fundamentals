function substring(string, start, end) {
    stringLength = string.length;
    if (start === end) {
        console.log('');
        return
    }

    if (end === undefined) {
        if (isNaN(start) || start < 0) start = 0;
        let solutionString = ""
        for (let i = start; i < stringLength; i += 1) {
            solutionString += string[i]
        }
        console.log(solutionString)
        return;
    }

    if (isNaN(start) || start < 0) start = 0;
    if (isNaN(end) || end < 0) end = 0;

    if (end === undefined) end = stringLength

    let lowIndex = (start < end) ? start : end
    let highIndex = (start < end) ? end : start

    let solutionString = ""
    for (let i = lowIndex; i < highIndex; i += 1) {
        if (string[i] === undefined) break;
        solutionString += string[i]
    }
    console.log(solutionString);
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"