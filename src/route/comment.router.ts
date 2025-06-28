import { Router } from "express";
import { ValditionToken } from "../middleware/valditiontoken/valdition.token.mddleware";
import { AddCommentContollar } from "../controllar/comment/add.comment.controllar";
const App=Router();

App.post('/addnewcomment',ValditionToken,AddCommentContollar);


export default App;