import checkFile from '../../utilities/checkFile';
import constants from '../../utilities/consts';
describe('checkFile Checks', () => {
  it('VALID CHECK: Expect "image-processing-api\\assets\\org\\fjord.jpg" to return true', () => {
    expect(checkFile(constants.SOURCEPATH, 'fjord.jpg')).toEqual(true);
  });
  it('INVALID CHECK: Expect "image-processing-api\\assets\\org\\fjordjpg" to return false', () => {
    expect(checkFile(constants.SOURCEPATH, 'fjordjpg')).toEqual(false);
  });
});
