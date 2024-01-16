const add = function(num1, num2) {
	return Number(num1 + num2);
};

const subtract = function(num1, num2) {
	return Number(num1 - num2);
};

const sum = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
	return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for(let i = 0; i < arr.length; i++){
    sum *= arr[i];
  }
  return sum;

};

const power = function(num, power) {
  let result = num;
  for(let i = 1; i < power; i++){
    result *= num;
  }
	return result;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
  else{
    result = num;
    for(let i = 1; i < num; i++){
      result *= num - i
    }
    return result;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
