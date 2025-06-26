import { Request,Response,NextFunction } from "express";



const ValditionDataProject=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {nameProject,typeProject,description,tasks}=req.body;
        for(let task of tasks){
            const {nameTask,typeTask,overviewTask,ownUser}=task
        }
        next();
        
    }
    catch(err){
        res.status(400).json(`there miss data format`)
    }
}

export {ValditionDataProject}