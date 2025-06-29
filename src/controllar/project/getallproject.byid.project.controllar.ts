import { Request,Response } from "express";
import { GetAllProjectByIdModel } from "../../model/project/getallproject.byid.project.model";


const GetAllProjectByIDControllar=async(req:Request,res:Response)=>{
    try{
        const iduser=res.locals.tokendata.id;
        const DataProject=await GetAllProjectByIdModel(iduser);
        res.status(200).json(DataProject);
    }
    catch(err){res.status(403).json(`there issue in request`)}
}

export {GetAllProjectByIDControllar}