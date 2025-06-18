import  {Router} from 'express'
import { SignupControlaar } from '../controllar/signup/signup.controllar';
import { SignupValditionData } from '../middleware/valdtiondata/signup.valdition.data';

const App=Router();

App.post('/',SignupValditionData,SignupControlaar);

export default App;
