const { predictAge } = require('../src');

describe('predictAge', () => {

  it('should return the predicted age you will die based on your grandparents age before passing', () => {

    expect(predictAge(65,60,75,55,60,63,64,45)).toBe(86);
  });



});
