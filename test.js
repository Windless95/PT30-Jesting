// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

// // import the function sum from the app.js file
// const { sum } = require('./app.js');
// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);
//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });


test("One euro should be 1.2 dollars", function(){
    
    const { fromEuroToDollar , oneEuroIs } = require('./app.js')

    
    const dollars = fromEuroToDollar(3);

    
    const expected = 3 * 1.2; 
    
  
    expect(dollars).toBe(expected); 
});

test("One dollar should be 109.67 yen", function(){
   
    const { fromDollarToYen, oneEuroIs } = require('./app.js')

    
    const yen = fromDollarToYen(3);

   
    const expected = 3 * ((1 / oneEuroIs.USD) * oneEuroIs.JPY);
    
    
    expect(yen).toBe(expected); 
});

test("One yen should be 0.0066 pounds", function(){
   
    const { fromYenToPound, oneEuroIs } = require('./app.js')

    
    const pound = fromYenToPound(3);

    
    const expected =(3 / oneEuroIs.JPY) * oneEuroIs.GBP; 
    
    expect(pound).toBe(expected); 
});