expect = require('chai').expect
const {simplifyPath} = require('./simpligyPath')

describe('#simplifyPath()', () => {
  it('"/home/"', () => {
    expect(simplifyPath("/home/")).to.equal('/home')
  }),
  it('"/../"', () => {
    expect(simplifyPath('/../')).to.equal('/')
  }),
  it("/home//foo/", () => {
    expect(simplifyPath('/home//foo/')).to.equal('/home/foo')
  }),
  it("/a/./b/../../c/", () => {
    expect(simplifyPath('/a/./b/../../c/')).to.equal('/c')
  }),
  it("/a/../../b/../c//.//", () => {
    expect(simplifyPath('/a/../../b/../c//.//')).to.equal('/c')
  }),
  it("/a//b////c/d//././/..", () => {
    expect(simplifyPath('/a//b////c/d//././/..')).to.equal('/a/b/c')
  })
})