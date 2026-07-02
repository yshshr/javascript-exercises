const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numarr) {
	return numarr.reduce((sum,cur)=>sum+cur,0);
};

const multiply = function(numarr) {
  return numarr.reduce((mul,cur)=>mul * cur,1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
  let factorial = 1;
	for(let i=n;i>0;i--){
    factorial = factorial * i;
  }
  return factorial;
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
