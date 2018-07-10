const { banjo } = require('../src');

describe('banjo', () => {
  it('should return all people that have a name beginning with the letter R as being able to play the banjo', () => {
    expect(banjo("Martin")).toBe("Martin does not play banjo");
    expect(banjo("Rikke")).toBe("Rikke plays banjo");
    expect(banjo("ringo")).toBe("ringo plays banjo");
    expect(banjo("bob")).toBe("bob does not play banjo");

  });

});
