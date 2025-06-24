import { Request,Response } from "express";
import { AddFavoriteModel } from "../../model/add/favorite.add.model";


const AddFavoriteContollar=async (req:Request,res:Response)=>{
    try{
        const idOwn=res.locals.tokendata.id||res.locals.tokendata._id;
        const idNew=req.body.idNew;
        if(!idOwn||!idNew){
            throw {state:400, message:`there miss data`}
        }
        await AddFavoriteModel(idOwn,idNew);
        res.status(200).json(`the user that id:${idNew} add`);

    }
    catch(err:any){
        if(err.state==403){res.status(403).json(err.message)}
        else if(err.state==400){res.status(400).json(err.message)}
        else{
            res.status(400).json(`there issue in request`)
        }
    }
}

export {AddFavoriteContollar}