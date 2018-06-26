const { triangle } = require('../src');

describe('triangle', () => {

  it('should return the third angle of the triangle', () => {
    expect(triangle(30, 60)).toEqual(90);
    expect(triangle(60, 60)).toEqual(60);
    expect(triangle(43, 78)).toEqual(59);
    expect(triangle(10, 20)).toEqual(150);
  })
});
