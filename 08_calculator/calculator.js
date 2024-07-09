const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {

	return arr.length == 0 ? 0: arr.reduce((total, current) => total + current);
};

const multiply = function(arr) {
  return arr.length == 0 ? 0: arr.reduce((total, current) => total * current);
};

const power = function(n, p) {
	return n**p;
};

const factorial = function(n) {
	if(n == 0) {
    return 1;
  }
  return n * factorial(n-1);
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
