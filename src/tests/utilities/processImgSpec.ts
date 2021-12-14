import processImg from "../../utilities/processImg";

describe('Check if image processed', () => {
  it('For Image Resize Width=100, Height=150, NameArray=[\'fjord\',\'jpg\']', async () => {
    const Buffer = await processImg(100,150,['fjord','jpg'])
    expect(Buffer).toBeDefined(); //Obtained from Jasmine docs.
  });
});