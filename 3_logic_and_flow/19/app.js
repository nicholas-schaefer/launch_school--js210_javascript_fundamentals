function substr(string, start, length) {
    let stringLength = string.length;
    if (start < 0) start = stringLength + start;
    if (length < 0) length = 0;

    let end = start + length;
    if (end > stringLength) end = stringLength;

    // console.log(start, end);
    let solution_string = "";

    for (let i = start; i < end; i +=1){
        // console.log(string[i])
        solution_string += string[i];
    }

    console.log(solution_string);
    return solution_string;
  }

  let string = 'hello world';
  substr(string, 2, 4);      // "llo "
  substr(string, -3, 2);     // "rl"
  substr(string, 8, 20);     // "rld"
  substr(string, 0, -20);    // ""
  substr(string, 0, 0);      // ""