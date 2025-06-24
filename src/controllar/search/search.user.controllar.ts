import { Request,Response } from "express";
import { SearchUserModel } from "../../model/search/search.user.model";


const SearchUserControllar=async (req:Request,res:Response)=>{
  try{
    const iduser=req.params.iduser;
    const DataUser=await SearchUserModel(iduser);
    res.status(200).json(DataUser);

  }
  catch(err:any){
    if(err.state==403){res.status(403).json(err.message)}
    else if(err.state==400){res.status(400).json(err.message)}
    else{
        res.status(400).json(`there issue in request`)
    }
}
}

export {SearchUserControllar}