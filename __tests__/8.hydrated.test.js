const { hydrated } = require('../src');

describe('hydrated', () => {

  it('should return the total number of litres consumed per hour of cycling', () => {
    expect(hydrated(2)).toBe(1);
    expect(hydrated(1.4)).toBe(0);
    expect(hydrated(12.3)).toBe(6);
    expect(hydrated(0.82)).toBe(0);
    expect(hydrated(11.8)).toBe(5);

  });
});
