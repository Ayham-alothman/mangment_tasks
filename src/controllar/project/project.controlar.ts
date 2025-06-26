import { Request,Response,NextFunction } from "express";
import { StoreProjectModel } from "../../model/project/store.project.model";
import { StoreFileProject } from "../../functons/storage/store.file.project";

const ProjectControllar=async(req:Request,res:Response)=>{

    try{
        const {nameProject,typeProject,description}=req.body;
        const idUser=res.locals.tokendata.id;
        const tasks=res.locals.idsTask;
        const idProdect=
        await StoreProjectModel(nameProject,typeProject,idUser,description,tasks);
        if(req.body.descP){
            const files:any=req.files;
            
            for(let file of files){
                if(file.fieldname==`descP`){
                  await  StoreFileProject(idProdect as string,file.buffer);
                  break;
                }
            }
            res.status(200).end();
        }   
        res.status(201).json(`store all data withot file project`)
    }
    catch(e){
        res.status(403).json(`there issue in request `)
    }
}

export {ProjectControllar}