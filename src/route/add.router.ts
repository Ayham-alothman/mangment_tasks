import { Router } from "express";
import { ValditionToken } from "../middleware/valditiontoken/valdition.token.mddleware";
import { AddFavoriteContollar } from "../controllar/add/favorite.add.controllar";
import { RemoveFavoriteContollar } from "../controllar/add/remove.favorite.controllar";
import { GetFavoriteContollar } from "../controllar/add/favorite.get.controllar";
const App=Router();

App.post('/favorite',ValditionToken,AddFavoriteContollar);
App.delete('/favorite',ValditionToken,RemoveFavoriteContollar)
App.get('/favorite',ValditionToken,GetFavoriteContollar);

export default App;