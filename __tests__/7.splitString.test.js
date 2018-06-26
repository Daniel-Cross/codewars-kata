const { splitString } = require('../src');

describe('splitString', () => {

  it('should return a string split into seperate segments', () => {

    expect(splitString('supercalifragilisticexpialidocious')).toBe('sup erc ali fra gil ist ice xpi ali doc iou s');


  });

});


