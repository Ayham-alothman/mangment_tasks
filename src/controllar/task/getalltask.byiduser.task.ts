import {Request,Response ,NextFunction } from "express";
import { GetAllTaskByIdModel } from "../../model/task/gettasks.ownid.model";
import { SearchTaskFile } from "../../functons/search.file/task.search.file";


const GetAllTaskByIdControllar=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const iduser=res.locals.tokendata.id;
        
        const Datatask:any=await GetAllTaskByIdModel(iduser);

        for(let i=0;i<Datatask.length;i++ ){

            const fileTask=await SearchTaskFile(Datatask[i]._id.toString());
            
            if(fileTask){Datatask[i].fileTask=fileTask}
          }
  

        res.status(200).json(Datatask);
    }
    catch(err){ 
        res.status(403).json(`there issue in request`)

    }
}

export {GetAllTaskByIdControllar}