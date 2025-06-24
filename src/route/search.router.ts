import {Router} from 'express';
import { SearchUserControllar } from '../controllar/search/search.user.controllar';

const App =Router();

App.post('/:iduser',SearchUserControllar);

export default App; 