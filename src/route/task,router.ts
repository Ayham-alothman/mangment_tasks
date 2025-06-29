import {Router} from 'express';
import { ValditionToken } from '../middleware/valditiontoken/valdition.token.mddleware';
import { ChangestateTaskControllar } from '../controllar/task/changestate.task.controllar';
import { GetAllTaskByIdControllar } from '../controllar/task/getalltask.byiduser.task';
const App =Router();

App.post(`/changestate`,ValditionToken,ChangestateTaskControllar);
App.get('/gettasks',ValditionToken,GetAllTaskByIdControllar);

export default App; 