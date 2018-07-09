const { petals } = require('../src');

describe('petals', () => {

  it('should return the time taken to travel from the tree to the floor based on the speed per second', () => {

    expect(petals(5)).toEqual(80);
    expect(petals(10)).toEqual(40);
    expect(petals(-1)).toEqual(0);
  });

});
