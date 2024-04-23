const convertToCelsius = function(tempF) {
  tempNew=((tempF-32)*(5/9));
  return Math.round(tempNew*10)/10;       // adding Math.round(num*10)/10 to round it to 1 decimal point
};

const convertToFahrenheit = function(tempC) {
  tempNew=((tempC*(9/5))+32);
  return Math.round(tempNew*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


