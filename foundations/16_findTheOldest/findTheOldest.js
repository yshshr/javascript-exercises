const findTheOldest = function(people) {
  return people.reduce((oldest,cur)=>{
    const curYear = (new Date).getFullYear();
    const oldestLiveYear = (oldest.yearOfDeath || curYear)- oldest.yearOfBirth;
    const curLiveYear = (cur.yearOfDeath || curYear) - cur.yearOfBirth;
    if(oldestLiveYear < curLiveYear){
      oldest = cur;
    }
    return oldest;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
