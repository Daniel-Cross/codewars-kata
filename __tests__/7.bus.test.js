const { bus } = require('../src');

describe('bus', () => {
it('should return the number of people left on the bus when the bus pulls into the final station', () =>
  {
    expect(bus([[10,0],[3,5],[5,8]])).toEqual(5)
    expect(bus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toEqual(17)
    expect(bus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21)
  });
});
