const stockSpan = (prices) => {
  const stack = []
  stack.peek = () => stack[stack.length - 1];
  const stockSpans = Array(prices.length).fill(null);

  for(let currentDay = prices.length - 1; currentDay >= 0;  currentDay--){
    while(stack.length && stack.peek().price < prices[currentDay]){
      const futureStock = stack.pop();
      stockSpans[futureStock.day] = futureStock.day - currentDay;
      }
    stack.push(new StockPrice(prices[currentDay], currentDay))
  }
  // clear stack
  while(stack.length){
    const futureStock = stack.pop();
    stockSpans[futureStock.day] = futureStock.day + 1;
  }
  return stockSpans
}

class StockPrice {
  constructor(price, day){
    this.price = price;
    this.day = day;
  }
}

module.exports = {stockSpan}