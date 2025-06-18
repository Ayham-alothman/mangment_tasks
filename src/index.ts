import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';



const app = express();
app.use(bodyParser.json());
dotenv.config();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))



const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

import Signup from './route/signup.router';
import Verify from './route/verify.router';
import Login from './route/login.router'


app.use('/signup',Signup);
app.use('/verify',Verify);
app.use('/login',Login);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
