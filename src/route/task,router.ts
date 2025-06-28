import {Router} from 'express';
import { ValditionToken } from '../middleware/valditiontoken/valdition.token.mddleware';
import { ChangestateTaskControllar } from '../controllar/task/changestate.task.controllar';
const App =Router();

App.post(`/changestate`,ValditionToken,ChangestateTaskControllar)

export default App; 