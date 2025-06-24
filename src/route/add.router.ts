import { Router } from "express";
import { ValditionToken } from "../middleware/valditiontoken/valdition.token.mddleware";
import { AddFavoriteContollar } from "../controllar/add/favorite.add.controllar";
const App=Router();

App.post('/favorite',ValditionToken,AddFavoriteContollar);

export default App;