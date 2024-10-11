global.array1 = [1, 2, undefined, 4];
// array1 4


global.array2 = [1];
global.array2.length = 5;
// array2 5

global.array3 = [];
array3[-1] = [1];
// array3 0

global.array4 = [1, 2, 3, 4, 5];
global.array4.length = 3;
// array4 3

global.array5 = [];
global.array5[100] = 3;
// array4 101


// array1
// array2
// array3
// array4
// array5

// Function to demonstrate accessing and manipulating the arrays
function demonstrateArrayAccess() {
    for (let i = 1; i <= 5; i++) {
      const arrayName = `array${i}`;
      const array = global[arrayName];
      console.log(array);
      console.log(`Length of ${arrayName}:`, array.length);
      console.log("-------------")
    }
  }

  // Run the demonstration
  demonstrateArrayAccess();