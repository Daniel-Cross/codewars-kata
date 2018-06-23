const { xo } = require('../src');

describe('xo', () => {

  it('should return true if the number of x and o in the string are equal, otherwise return false' , () => {
      expect(xo('xo')).toBe(true)
      expect(xo('xxOo')).toBe(true)
      expect(xo('xxxm')).toBe(false)
      expect(xo('Oo')).toBe(false)
      expect(xo('ooom')).toBe(false)
      expect(xo('')).toBe(true)
      expect(xo('xoxoxoxoxoxoxo')).toBe(true)


  });

});
