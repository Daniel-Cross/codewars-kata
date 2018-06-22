const {doubleNumber} = require('../src');

describe('doubleNumber', () => {
it('Should return the numbers from the array doubled', () => {
  expect(doubleNumber([2,4,6,8,10])).toEqual([4,8,12,16,20])
  expect(doubleNumber([7,32,4,63,273])).toEqual([14,64,8,126,546])

  });
});
