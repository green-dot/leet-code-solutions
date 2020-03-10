expect = require('chai').expect
should = require('chai').should()

const {asteroidCollision} = require('./asteroidCollision')

describe('#asteroidCollision()', () => {
  it('No Asteroids', () => {
    expect(asteroidCollision([])).to.be.an('array').that.is.empty
  }), 
  it('One Right', () => {
    expect(asteroidCollision([5])).to.have.ordered.members([5])
  }),
  it('One Left', () => {
    expect(asteroidCollision([-10])).to.have.ordered.members([-10])
  }),
  it('Right winning collision', () => {
    expect(asteroidCollision([10, -5])).to.have.ordered.members([10])
  }),
  it('Left winning collision', () => {
    expect(asteroidCollision([5, -10])).to.have.ordered.members([-10])
  }),
  it('Mutual descrution', () => {
    expect(asteroidCollision([10, -10])).to.be.an('array').that.is.empty
  }),
  it('No descrution', () => {
    expect(asteroidCollision([-10, 10])).to.have.ordered.members([-10, 10])
  }),
  it('Right Moving Protected', () => {
    expect(asteroidCollision([2, 10, -10])).to.have.ordered.members([2])
  }),
  it('Left Moving Protected', () => {
    expect(asteroidCollision([ 10, -10, -2])).to.have.ordered.members([-2])
  }),
  it('Left Moving No Collsion', () => {
    expect(asteroidCollision([ -2, 20, -10])).to.have.ordered.members([-2, 20])
  }),
  it('No Collsions', () => {
    expect(asteroidCollision([ -2, -20, -10, 20, 39, 50])).to.have.ordered.members([-2, -20, -10, 20, 39, 50])
  })

})