// Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a 
// subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an 
// algorithm that takes a list of n numbers as input and checks whether there is a 
// 132 pattern in the list.

// n will be less than 15,000

const find132Pattern = (nums) => {

  if (nums.length < 3){
    return false
  }

  const mins = generateRunningMinimums(nums)
  let stack = new Stack();

  for(let k=nums.length-1; k>=1; k--){
    if(nums[k] > mins[k]){
      removeElementsFromStackBelowPreceedingMinimum(stack, mins[k])
      if(stack.peek() < nums[k]){
        return true
      }
      stack.push(nums[k])
    } 
  }
  return false
}

 const removeElementsFromStackBelowPreceedingMinimum = (stack, min) => {
  while(!stack.isEmpty() && stack.peek() <= min){
    stack.pop()
  }
  return stack
}

const generateRunningMinimums = (nums) => {
  let mins = Array(nums.length)
  for(let i=0; i<nums.length; i++){
    mins[i] = i > 0 ? Math.min(nums[i], mins[i-1]) : nums[0]
  }
  return mins
}

class Stack {
  constructor(){
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length-1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  printStack(){
    console.log(this.items)
  }
}


module.exports = {find132Pattern, generateRunningMinimums}
