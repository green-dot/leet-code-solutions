// Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a 
// subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an 
// algorithm that takes a list of n numbers as input and checks whether there is a 
// 132 pattern in the list.

// n will be less than 15,000

const find123Pattern = (nums) => {

  for (let i=0; i < nums.length; i++){
    for (let j=i+1; j < nums.length; j++){
      for (let k=j+1; k < nums.length; k++){
        const checkOrder = i < j && j < k;
        const checkValues = nums[i] < nums[k] && nums[k] < nums[j]
        const patternFound = checkOrder && checkValues
        if (patternFound){
          return true
        }
      }
    }    
  }
  return false
}

module.exports = {find123Pattern}
