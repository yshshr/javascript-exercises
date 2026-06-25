const sumAll = function(num1, num2) {
  if(num1 <=0 || num2 <=0 || Math.floor(num1)!==num1 || Math.floor(num2) !== num2){
    return 'ERROR';
  }
  let xs = num1 > num2 ? (num1 - num2 + 1) : (num2 - num1 + 1);
  return (num1 + num2) * xs / 2;
};

// Do not edit below this line
module.exports = sumAll;
