import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';

 

const app = express();
app.use(cookieParser());

app.use(bodyParser.json());
dotenv.config();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(upload.any());


const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

import Signup from './route/signup.router';
import Verify from './route/verify.router';
import Login from './route/login.router';
import Search from './route/search.router';
import Add from './route/add.router';
import Project from './route/project.router';
import Task from './route/task,router';
import Comment from './route/comment.router'


app.use('/signup',Signup);
app.use('/verify',Verify);
app.use('/login',Login);
app.use('/search',Search);
app.use('/add',Add);
app.use('/project',Project);
app.use('/task',Task);
app.use('/comment',Comment);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
