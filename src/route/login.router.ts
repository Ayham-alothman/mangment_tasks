import { Router } from "express";
import { LoginControllar } from "../controllar/login/login.controllar";

const App=Router();

App.post('/',LoginControllar);

export default App;