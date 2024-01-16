const convertToCelsius = function(farenheit) {
  let conversion = 5/9*(farenheit - 32);
  return Number(conversion.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  let conversion = celcius * (9/5) + 32;
  return Number(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
