import { Request,Response } from "express";

import { LoginUserModel } from "../../model/login/login.user.model";
import { GenerateToken } from "../../functons/jwt/generat.token";


const LoginControllar=async (req:Request,res:Response)=>{
    try{
        const {email,password}=req.body;
        const data=await LoginUserModel(email,password);
        const token=await GenerateToken(data);
        
       // res.status(200).cookie('token',token).end();
        res.status(200).json(token);
    }
    catch(err:any){
        if(err.state==403){res.status(403).json(err.message)}
        else if(err.state==400){res.status(400).json(err.message)}
        else{
            res.status(400).json(`there issue in request`)
        }
    }
}

export {LoginControllar}

