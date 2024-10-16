function repeat(string, times) {
    if (isNaN(times) || parseInt(times) !== times || times < 0){
        console.log("undefined");
        return
    }
    let solution = ""

    for(i = 0; i < times; i+=1){
        solution += string;
    }
    console.log(solution);
}

  repeat('abc', 1);       // "abc"
  repeat('abc', 2);       // "abcabc"
  repeat('abc', 0);       // ""

  repeat('abc', -1);      // undefined
  repeat('abc', 'a');     // undefined
  repeat('abc', false);   // undefined
  repeat('abc', null);    // undefined
  repeat('abc', '  ');    // undefined