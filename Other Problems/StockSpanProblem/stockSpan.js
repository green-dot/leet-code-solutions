const stockSpan = (prices) => {
  const stack = []
  const spans = Array(prices.length).fill(null)

  for(let i = prices.length - 1; i >= 0; i --){
    if(stack.length === 0){
      stack.push({'value': prices[i], 'ind': i})
    } else {
      //remove all lower values, should be <= ?
      while(stack.length && stack[stack.length-1].value < prices[i]){
        const price = stack.pop();
        spans[price.ind] = price.ind - i;
      }
      stack.push({'value': prices[i], 'ind': i})
    }
  }
  // clear stack
  while(stack.length !== 0){
    const leftover = stack.pop();
    spans[leftover.ind] = leftover.ind + 1;
  }
  return spans
}

module.exports = {stockSpan}