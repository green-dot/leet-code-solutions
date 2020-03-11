expect = require('chai').expect
const {stockSpan} = require('./stockSpan')

describe('#stockSpan()', () => {
  it('[100, 80, 60, 70, 60, 75, 85]', () => {
    expect(stockSpan([100, 80, 60, 70, 60, 75, 85])).to.have.ordered.members([1, 1, 1, 2, 1, 4, 6])
  }),
  it('[10, 4, 5, 90, 120, 80]', () => {
    expect(stockSpan([ 10, 4, 5, 90, 120, 80])).to.have.ordered.members([1, 1, 2, 4, 5, 1])
  }) 
})