let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1(); // reassigns global variable to 'tv'
  shop2(); // reassigns global variable to 'computer'
  shop3(); // intitializes new local variable `basket` to String value 'play station, logs it

  console.log(basket);
}

goShopping();
// 'empty', returns the global variable declared on line 1
// 'play station', returns the block scoped basket variable on line 16
// 'computer' returns the global basked variable