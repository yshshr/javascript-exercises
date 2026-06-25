const removeFromArray = function(arr) {
  const args = Array.from(arguments);
  args.forEach(arg => {
    let done;
    while(!done){
      let itemIndex = arr.indexOf(arg);
      if(itemIndex<0){
        done = true;
      }else{
        arr.splice(itemIndex,1);
      }
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
