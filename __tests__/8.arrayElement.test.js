const { arrayElement } = require('../src');

describe('arrayElement', () => {
it('should return the number of the elements within the array', () => {

expect(arrayElement([1,2,3,4,5,6,7,8,9,10])).toEqual(10);
expect(arrayElement([1,2,3,4,5,6,7])).toEqual(7);
expect(arrayElement([1,2,3,4,5])).toEqual(5);
expect(arrayElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toEqual(15);

});

});
