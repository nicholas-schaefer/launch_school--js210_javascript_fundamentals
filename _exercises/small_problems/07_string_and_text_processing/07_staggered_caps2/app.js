console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

function staggeredCase(input){
  const lowercasedCharsArr = input.toLowerCase().split('')

  const staggeredObject = lowercasedCharsArr.reduce((obj, char)=>{
    switch(true){
      case (/[^a-z]/.test(char)):
        obj.charsArray.push(char);
        return obj;
      case (obj.counter % 2 === 0):
        obj.counter+=1;
        obj.charsArray.push(char.toUpperCase());
        return obj;
      default:
        obj.counter+=1;
        obj.charsArray.push(char);
        return obj;
    }
  }, {counter: 0, charsArray: []})

  return staggeredObject.charsArray.join('');
}