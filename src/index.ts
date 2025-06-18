import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';



const app = express();
app.use(bodyParser.json());
dotenv.config();


const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

import Signup from './route/signup.router';

app.use('/signup',Signup);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
