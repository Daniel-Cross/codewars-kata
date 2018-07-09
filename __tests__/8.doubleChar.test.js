const { doubleChar } = require('../src');

describe('doubleChar', () => {
  it('should return double the characters in the string', () => {

    expect(doubleChar('abcd')).toBe('aabbccdd');
    expect(doubleChar('Adidas')).toBe('AAddiiddaass');
    expect(doubleChar('1337')).toBe('11333377');
    expect(doubleChar('illuminati')).toBe('iilllluummiinnaattii');
    expect(doubleChar('123456')).toBe('112233445566');
  });


});
