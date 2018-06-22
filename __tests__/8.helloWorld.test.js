const { helloWorld } = require('../src');

describe('helloWorld', () => {
  it('should return the string hello world!', () => {
    expect(helloWorld(true)).toBe('hello world!');
    expect(helloWorld(false)).toBe('goodbye world!');
  });

  });
