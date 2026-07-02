const fibonacci = function(n) {
  if(typeof n !== 'Number'){
    n = Number(n);
  }
  if(n===0){
    return 0;
  } else if(n===1){
    return 1;
  } else if(n===2){
    return 1;
  } else if(n>=3) {
    return fibonacci(n-1) + fibonacci(n-2);
  } else if(n<0){
    return 'OOPS';
  }
};

// Do not edit below this line
module.exports = fibonacci;
