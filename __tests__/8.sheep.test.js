const { sheep } = require('../src');

describe('sheep', () => {
  it('should return the number of sheep present in the array, true = sheep', () => {
    expect(sheep([true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true ])).toBe(17)
  })

});
