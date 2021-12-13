//Add Dependencies
import express from 'express'; //Express to run server
import routes from './routes/index';

const app = express(); //App instance
const port = 8000;

//Configures route to API
app.use('/api', routes);

//Set up server
const listening = () => {
  console.log('server is running');
  console.log(`running on localhost 8000`);
};
const server = app.listen(port, listening);

export default app;
