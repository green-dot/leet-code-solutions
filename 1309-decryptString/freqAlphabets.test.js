// import freqAlphabets from './freqAlphabets.js/index.js';
expect = require('chai').expect
should = require('chai').should()
const {freqAlphabets, parseCharacterNumbers, transformNumbers2Chars} = require('./freqAlphabets')

var assert = require('assert');

describe('#freqAlphabets()', () =>
{
  it('Empty String Input', () => {
    expect(freqAlphabets('')).to.equal('')
  }),

  it('Example 1', () => {
    expect(freqAlphabets('10#11#12')).to.equal('jkab')
  }),
  it('Example 2', () => {
    expect(freqAlphabets('1326#')).to.equal('acz')
  }),
  it('Example 3', () => {
    expect(freqAlphabets('25#')).to.equal('y')
  }),
  it('Full Alphabet', () => {
    expect(freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')).to.equal('abcdefghijklmnopqrstuvwxyz')
  })
})

describe('#parseCharacterNumbers()', () => {
  it('Empty Input String', () => {
    expect(parseCharacterNumbers('')).to.be.an('array').that.is.empty;
  }),
  it('1', () => {
    expect(parseCharacterNumbers('1')).to.have.ordered.members(['1']);
  }),
  it('15', () => {
    expect(parseCharacterNumbers('15')).to.have.ordered.members(['1', '5']);
  }), 
  it('10#', () => {
    expect(parseCharacterNumbers('10#')).to.have.ordered.members(['10']);
  }), 
  it('110#26#3', () => {
    expect(parseCharacterNumbers('110#26#3')).to.have.ordered.members(['1','10', '26', '3']);
  })
})

describe('#transformNumbers2Chars()', () => {
  it('Empty Input Array', () => {
    expect(transformNumbers2Chars([])).to.be.an('array').that.is.empty;
  }),
  it('1', () => {
    expect(transformNumbers2Chars(['1'])).to.have.ordered.members(['a']);
  }),
  it('15', () => {
    expect(transformNumbers2Chars(['1', '5'])).to.have.ordered.members(['a', 'e']);
  }), 
  it('10#', () => {
    expect(transformNumbers2Chars(['10'])).to.have.ordered.members(['j']);
  }), 
  it('110#', () => {
    expect(transformNumbers2Chars(['1', '10'])).to.have.ordered.members(['a','j']);
  }),
  it('110#26#', () => {
    expect(transformNumbers2Chars(['1', '10','26'])).to.have.ordered.members(['a','j', 'z']);
  })

})


