import express from 'express';
import logger from '../../utilities/logger';
import constants from '../../utilities/consts';
import processImg from '../../utilities/processImg';
import nameType from '../../utilities/nameType';
import checkFile from '../../utilities/checkFile';
import fs from 'fs';
const resize = express.Router();

//This checks if file was in incorrect format or was not found. If not found or invalid format then outputs error. Otherwise it resizes the image and sends it to browser
resize.get(
  '/imageName=:imageName&width=:width&height=:height',
  logger,
  async (req: express.Request, res: express.Response) => {
    const Name = req.params.imageName;
    const Width = req.params.width;
    const Height = req.params.height;
    //Pre-Create folder
    if (fs.existsSync(constants.DESTPATH)) {
      console.log('/thumb already exists');
    } else {
      console.log('Created /thumb');
      fs.mkdirSync(constants.DESTPATH);
    }

    const nameArr = nameType(Name);
    if (
      nameArr[0] == 'Invalid Name!' ||
      !checkFile(constants.SOURCEPATH, Name)
    ) {
      res.send('Invalid file format or file does not exist');
      //Means both are truthy numbers
    } else if (parseInt(Width) > 0 && parseInt(Height) > 0) {
      if (
        checkFile(
          constants.DESTPATH,
          `${nameArr[0]}_thumb_${Width}_${Height}.${nameArr[1]}`
        )
      ) {
        //Means file already exists
        console.log('Found cached image');
        res.sendFile(
          `${constants.ABS_DEST}${nameArr[0]}_thumb_${Width}_${Height}.${nameArr[1]}`
        );
      } else {
        const img = await processImg(
          parseInt(Width),
          parseInt(Height),
          nameArr
        );
        //img.toFile(`${constants.DESTPATH}${nameArr[0]}_thumb.${nameArr[1]}`);
        console.log('Run Path:' + process.cwd());
        fs.writeFileSync(
          `${constants.DESTPATH}${nameArr[0]}_thumb_${Width}_${Height}.${nameArr[1]}`,
          img
        );
        res.sendFile(
          `${constants.ABS_DEST}${nameArr[0]}_thumb_${Width}_${Height}.${nameArr[1]}`
        );
        console.log('Done');
      }
    } else {
      res.send('One or more parameters is Not a Number (NaN) or less than or equal 0');
    }
    console.log(res.statusCode);
  }
);

export default resize;
