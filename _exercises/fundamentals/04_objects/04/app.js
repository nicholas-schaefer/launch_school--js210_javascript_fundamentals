const myObject = {
    prop1: '123',
    prop2: '234', //'456
    'prop 3': '345',
    //'456': '678'
  };

  const prop2 = '456';
  myObject['prop2'] = '456';
  myObject[prop2] = '678';

  console.log(myObject[prop2]); // '678'
  console.log(myObject.prop2); // '456'