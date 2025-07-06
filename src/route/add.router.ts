import { Router } from "express";
import { ValditionToken } from "../middleware/valditiontoken/valdition.token.mddleware";
import { AddFavoriteContollar } from "../controllar/add/favorite.add.controllar";
import { RemoveFavoriteContollar } from "../controllar/add/remove.favorite.controllar";
const App=Router();

App.post('/favorite',ValditionToken,AddFavoriteContollar);
App.delete('/favorite',ValditionToken,RemoveFavoriteContollar)

export default App;