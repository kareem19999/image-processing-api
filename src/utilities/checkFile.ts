import fs from 'fs';

/**
 * @description This function checks for file existance Filename with path, path must end with '/'
 * @param {string} path - The path of the file, should end with /
 * @param {string} filename - The filename as string (Both name and format)
 * @returns {boolean} Returns true if file was found and invalid if file does not exist
 */
const checkFile = (path: string, filename: string) => {
  if (fs.existsSync(`${path}${filename}`)) {
    return true;
  } else {
    return false;
  }
};

export default checkFile;
