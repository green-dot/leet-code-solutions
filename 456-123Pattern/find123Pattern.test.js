expect = require('chai').expect
should = require('chai').should()

const {find123Pattern} = require('./find123Pattern')

describe('#find123Pattern()', () => {
  it('Empty Input', () => {
    expect(find123Pattern([])).to.be.false
  }),
  it('To short', () => {
    expect(find123Pattern([1])).to.be.false
  }),
  it('Base Case', () => {
    expect(find123Pattern([1,3,2])).to.be.true
  }),
  it('Longer case', () => {
    expect(find123Pattern([1,3,4,2])).to.be.true
  }),
  it('Oredered Array', () => {
    expect(find123Pattern([1,2,3,4,5,6])).to.be.false
  }), 
  it('Almost Ordered Array', () => {
    expect(find123Pattern([1,2,3,4,6,6,3])).to.be.true
  })
})