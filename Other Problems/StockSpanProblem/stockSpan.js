const stockSpan = (prices) => {
  const stack = []
  stack.peek = () => stack[stack.length - 1];
  const spans = Array(prices.length).fill(null);

  for(let currentDay = prices.length - 1; currentDay >= 0;  currentDay--){
    //remove all lower values, should be <= ?
    while(stack.length && stack.peek().price < prices[currentDay]){
      const futureStock = stack.pop();
      spans[futureStock.day] = futureStock.day - currentDay;
      }
    stack.push(new StockPrice(prices[currentDay], currentDay))
  }
  // clear stack
  while(stack.length){
    const futureStock = stack.pop();
    spans[futureStock.day] = futureStock.day + 1;
  }
  return spans
}

class StockPrice {
  constructor(price, day){
    this.price = price;
    this.day = day;
  }
}

module.exports = {stockSpan}