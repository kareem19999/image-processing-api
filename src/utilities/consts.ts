const constants = {
  //Constants for source and destpath
  SOURCEPATH: './assets/org/',
  DESTPATH: './assets/thumb/',
  //This cuts the directory until image-processing-api to get the correct route to destination image
  //This also deals with build
  ABS_DEST: `${process.cwd()}/assets/thumb/`,
};
export default constants;
