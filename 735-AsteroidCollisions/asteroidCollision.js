const asteroidCollision = (asteroids) => {

  let finalAstroidConfig = []
  const rightMovingAstroids = new Stack()
  for(let i=0; i<asteroids.length; i++){
    if(asteroids[i] < 0){ //left moving
      if(rightMovingAstroids.isEmpty())
        finalAstroidConfig.push(asteroids[i])
      else{
        while(true){
          if(rightMovingAstroids.peek() < Math.abs(asteroids[i])){
            rightMovingAstroids.pop();
            if(rightMovingAstroids.isEmpty()){
              finalAstroidConfig.push(asteroids[i])
              break
            }  
          } else if(rightMovingAstroids.peek() == Math.abs(asteroids[i])){
            rightMovingAstroids.pop();
            break
          } else {
            break
          }
        }
      }
    }
    else {
      rightMovingAstroids.push(asteroids[i])
    }
  }
  //reverse and append stack here
  const reverseStack = new Stack();
  while (!rightMovingAstroids.isEmpty()){
    reverseStack.push(rightMovingAstroids.pop())
  }
  while(!reverseStack.isEmpty()){
    finalAstroidConfig.push(reverseStack.pop())
  }

  return finalAstroidConfig
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

module.exports = {asteroidCollision}