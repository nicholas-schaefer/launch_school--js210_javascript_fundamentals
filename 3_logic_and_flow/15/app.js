function splitString(string, delimiter) {
    if (delimiter === undefined) {
        console.log("ERROR: No delimiter");
        return;
    }
    // Array split strings =)
    const ass = [];

    if (delimiter === ''){
        let solution = Array.from(string)
        for(el of solution){
            console.log(el);
        }
        return
    }

    const tempSubArray = []


    for (char of string + delimiter){
        // console.log(char)
        if (char === delimiter){
            let substring = tempSubArray.join('');
            ass.push(substring);
            tempSubArray.length = 0;
            continue;
        }
        tempSubArray.push(char)
    }
    for(el of ass){
        console.log(el);
    }
    // console.log(ass);

  }

  splitString('abc,123,hello world', ',');
  // logs:
  // abc
  // 123
  // hello world

  splitString('hello');
  // logs:
  // ERROR: No delimiter

  splitString('hello', '');
  // logs:
  // h
  // e
  // l
  // l
  // o

  splitString('hello', ';');
  // logs:
  // hello

  splitString(';hello;', ';');
  // logs:
  //  (this is a blank line)
  // hello