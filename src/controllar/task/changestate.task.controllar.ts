import {Request,Response ,NextFunction } from "express";
import { ChangeStateOfTaskModel } from "../../model/task/changestate.task.model";


const ChangestateTaskControllar=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {idTask,stateTask}=req.body;
        const newDoc=await ChangeStateOfTaskModel(idTask,stateTask);
        res.status(200).json(newDoc);
    }
    catch(err){
        res.status(403).json(`there issue in request`)

    }
}

export {ChangestateTaskControllar}