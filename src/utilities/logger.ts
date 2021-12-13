import express from 'express';

//Logger, here it displays an error but next should be returned as a function
const logger = (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
): void => {
  const url = req.url;
  const Name = req.params.imageName;
  const Width = req.params.width;
  const Height = req.params.height;
  console.log(
    `${url} was visited with name:${Name}, Width:${Width}, Height:${Height}`
  );
  next();
};
export default logger;
