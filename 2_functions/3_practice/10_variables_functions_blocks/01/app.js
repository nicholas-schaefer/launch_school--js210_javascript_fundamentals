let myVar = 1;

function myFunc() {
  myVar = 2;
}

myFunc();
console.log(myVar); // 2



// Line 1 utilizes the `let` keyword to  intialize the global variable with the Integer Primitive 1;
// Lines 3-5 comprise a function declaration of a function named `myFunc`
// Line7 invokes the `myFun` function
//     Line 4 reassigns the global `myVar` variable to the Integer `2`
// Line 8 calls the log method on the console object, passing in global variable `myVar` as an argument.
//     Result of this method call is the Integer value 2 being output to the console