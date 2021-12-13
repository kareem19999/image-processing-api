//This gets the name and the type
/**
 * @description This function checks for correct filename and type then splits it into the filename and its filetype
 * @param {string} name - The full name of the file (name and format)
 * @returns {array} The array having both the name and the format, or invalid name if name is invalid
 */
const nameType = (name: string) => {
  const array = name.split('.');
  if (array.length == 2) {
    return array;
  } else {
    return ['Invalid Name!'];
  }
};

export default nameType;
