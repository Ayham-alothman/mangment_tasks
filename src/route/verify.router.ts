import {Router} from 'express';
import { VerifyControllar } from '../controllar/verify/verify.controllar';

const App=Router();

App.get('/:token',VerifyControllar);

export default App;