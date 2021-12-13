import sharp from 'sharp';
import constants from './consts';

/**
 * @description This function processes the image (Resize it),  gets converted to the required sizes then it is returned as Buffer
 * @param {number} width - Width of target image
 * @param {number} height - Height of target image
 * @returns {Promise<Buffer>} - Returns the image as a promise buffer
 */
const processImg = async (
  width: number,
  height: number,
  nameArray: Array<string>
): Promise<Buffer> => {
  console.log(`${constants.SOURCEPATH}${nameArray[0]}`);
  const img = await sharp(
    `${constants.SOURCEPATH}${nameArray[0]}.${nameArray[1]}`
  );
  //Fill is needed to change the aspect ratio if needed
  return img.resize(width, height, { fit: 'fill' }).toBuffer();
};

export default processImg;
