const { numberMultiply } = require('../src');

describe('numberMultiply', () => {
it('should return two numbers multiplied by each other', () => {
  expect(numberMultiply(12,3)).toEqual(36);
  expect(numberMultiply(35,5)).toEqual(175);
  expect(numberMultiply(52.6,12.7)).toEqual(668.02);
});

});
