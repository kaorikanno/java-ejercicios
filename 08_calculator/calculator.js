const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return  a - b 
};

const sum = function(array) {
	let total = array.reduce((final, numeros) => {return final + numeros}, 0)
  return total
};

const multiply = function(array) {
  let total = array.reduce((final, numeros) => {return final * numeros}, 1)
  return total
};

const power = function(a, b) {
  let valor = 1;
  for (let i = 0; i < b; i++) {
    valor = valor * a
  }
  return valor
	
};

const factorial = function(a) {
  let valor = 1
	for (let i = 1; i <= a; i++) {
    valor *= i
  }
  return valor
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
