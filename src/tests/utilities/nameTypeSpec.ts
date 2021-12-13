import nameType from '../../utilities/nameType';

//Correct check
describe('nameType Checks', () => {
  it('VALID CHECK: Expect "item.jpg" to return ["item,jpg"]', () => {
    expect(nameType('item.jpg')).toEqual(['item', 'jpg']);
  });
  //Invalid text check
  it('INVALID CHECK: Expect "itemjpg" to return ["Invalid Name!"]', () => {
    expect(nameType('itemjpg')).toEqual(['Invalid Name!']);
  });
  //Works with any format check
  it('ANY FORMAT CHECK: Expect "item.png" to return ["item,png"]', () => {
    expect(nameType('item.png')).toEqual(['item', 'png']);
  });
});
