import sharp from 'sharp';
import constants from './consts';

/**
 * @description This function processes the image (Resize it),  gets converted to the required sizes then it is returned as Buffer
 * @param {number} width - Width of target image
 * @param {number} height - Height of target image
 * @returns {Array<string>} This array contains the name and the format.
 */
const processImg = async (
  width: number,
  height: number,
  nameArray: Array<string>
) => {
  //Check if file is already available or not
  console.log(`${constants.SOURCEPATH}${nameArray[0]}`);
  const img = await sharp(
    `${constants.SOURCEPATH}${nameArray[0]}.${nameArray[1]}`
  );
  return img.resize(width, height).toBuffer();
};

export default processImg;
