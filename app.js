// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//fromEuroToDollar
const fromEuroToDollar = function(valueInEuro){

    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

//fromDollarToYen
const fromDollarToYen = function(valueInDollar){

    let valueInYen = valueInDollar * ((1 / oneEuroIs.USD) * oneEuroIs.JPY);
    return valueInYen;
}

//fromYenToPound
const fromYenToPound = function(valueInYen){

    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs};