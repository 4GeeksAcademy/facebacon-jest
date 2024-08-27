// This is my function that sums two numbers
const sum = (a,b) => {
  return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))


// Function to convert Euros to Dollars
const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
  };
  
  // Function to convert Dollars to Yen
  const fromDollarToYen = function (valueInDollar) {
    let conversionRate = 156.5 / 1.07;
    let valueInYen = valueInDollar * conversionRate;
    return valueInYen;
  };
  
  // Function to convert Yen to Pounds
  const fromYenToPound = function (valueInYen) {
    let conversionRate = 0.87 / 156.5;
    let valueInPound = valueInYen * conversionRate;
    return valueInPound;
  };
  
  // Exporting the functions
  module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };