import {Router} from 'express';
import { ValditionToken } from '../middleware/valditiontoken/valdition.token.mddleware';
import { ValditionDataProject } from '../middleware/valdtiondata/project.valdition.data';
import { AddTaskControllar } from '../controllar/task/add.task.controllar';
import { ProjectControllar } from '../controllar/project/project.controlar';

const App =Router();

App.post('/create',ValditionToken,ValditionDataProject,AddTaskControllar,ProjectControllar)

export default App; 