expect = require('chai').expect
should = require('chai').should()

const {find132Pattern, generateRunningMinimums} = require('./find132Pattern')

describe('#find132Pattern()', () => {
  it('Empty Input', () => {
    expect(find132Pattern([])).to.be.false
  }),
  it('To short', () => {
    expect(find132Pattern([1])).to.be.false
  }),
  it('#[1,3,2]', () => {
    expect(find132Pattern([1,3,2])).to.be.true
  }),
  it('Longer case', () => {
    expect(find132Pattern([1,3,4,2])).to.be.true
  }),
  it('Oredered Array', () => {
    expect(find132Pattern([1,2,3,4,5,6])).to.be.false
  }), 
  it('Almost Ordered Array', () => {
    expect(find132Pattern([1,2,3,4,6,6,3])).to.be.true
  }),
  it('#[1,0,1,-4,-3]', () => {
    expect(find132Pattern([1,0,1,-4,-3])).to.be.false
  })
})

describe('#generateRunningMinimums()', () => {
  it('Empty Input', () => {
    expect(generateRunningMinimums([])).to.be.an('array').that.is.empty
  }),
  it('[1,2,3,4]', () => {
    expect(generateRunningMinimums([1,2,3,4])).to.have.ordered.members([1,1,1,1])
  }),
  it('[4,3,2,1]', () => {
    expect(generateRunningMinimums([4,3,2,1])).to.have.ordered.members([4,3,2,1])
  }),
  it('[4,3,5,8,9,2,9,11,1,10,7]', () => {
    expect(generateRunningMinimums([4,3,5,8,9,2,9,11,1,10,7])).to.have.ordered.members([4,3,3,3,3,2,2,2,1,1,1])
  })
})