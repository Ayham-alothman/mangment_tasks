import {Router} from 'express';
import { ValditionToken } from '../middleware/valditiontoken/valdition.token.mddleware';
import { ValditionDataProject } from '../middleware/valdtiondata/project.valdition.data';
import { AddTaskControllar } from '../controllar/task/add.task.controllar';
import { ProjectControllar } from '../controllar/project/project.controlar';

import { GetDetailsProjectControllar } from '../controllar/project/getdetails.controllar';
import { GetAllProjectByIDControllar } from '../controllar/project/getallproject.byid.project.controllar';
const App =Router();

App.post('/create',ValditionToken,ValditionDataProject,AddTaskControllar,ProjectControllar)
App.get('/getallproject',ValditionToken,GetAllProjectByIDControllar);
App.get('/getproject/:idproject',GetDetailsProjectControllar)
export default App; 