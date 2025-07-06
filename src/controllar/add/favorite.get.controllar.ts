import { Request,Response } from "express";
import { GetFavoriteModel } from "../../model/add/favorite.get.model";
const GetFavoriteContollar=async (req:Request,res:Response)=>{
    try{
        const iduser=res.locals.tokendata.id||res.locals.tokendata._id;

        const FavoriteUser=await GetFavoriteModel(iduser);
        res.status(200).json(FavoriteUser);

    }
    catch(err:any){
        if(err.state==403){res.status(403).json(err.message)}
        else if(err.state==400){res.status(400).json(err.message)}
        else{
            res.status(400).json(`there issue in request`)
        }
    }
}

export {GetFavoriteContollar}