import { Request,Response,NextFunction } from "express";
import { StoreTaskModel } from "../../model/task/add.task.model";
import { AddTaskToUser } from "../../model/task/addtask.user.model";
import { StoreFileTask } from "../../functons/storage/store.file.task.storage";

const AddTaskControllar=async (req:Request,res:Response,next:NextFunction)=>{

    try{
        const Tasks=req.body.tasks;
        const idsTask=[];
        for(let i=0;i<Tasks.length;i++){
            if(Tasks[i].docsT){
                const {nameTask,typeTask,overviewTask,ownUser}=Tasks[i];
                const newIdTask=await StoreTaskModel(nameTask,typeTask,overviewTask,ownUser);
                idsTask.push(newIdTask);
                // add task to db
                await AddTaskToUser(newIdTask as string,ownUser)

                // add task to user
                const AllFiels:any=req.files;
                for(let file of AllFiels){
                    if(file.fieldname==`tasks[${i}][descT]`){
                       await StoreFileTask(newIdTask as string,file.buffer);
                       break;
                    }
                }

                
                // add file to to filesystem
            }
            else{
                const {nameTask,typeTask,overviewTask,ownUser}=Tasks[i];
                const newIdTask=await StoreTaskModel(nameTask,typeTask,overviewTask,ownUser);
                // add task to db
                await AddTaskToUser(newIdTask as string,ownUser);
                
            }
        }
        res.locals.idsTask=idsTask;
        next();
    }
    catch(err){
        res.status(403).json(`there issue in request`)
    }
}

export {AddTaskControllar}