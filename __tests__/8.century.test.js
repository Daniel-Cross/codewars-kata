const { century } = require('../src');

describe('century', () => {

  it('should return the century from the listed year', () => {

    expect(century(1705)).toEqual(18);
    expect(century(1600)).toEqual(16);
    expect(century(1936)).toEqual(20);
    expect(century(1204)).toEqual(13);
  });
});
