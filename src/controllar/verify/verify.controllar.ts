import { Request,Response } from "express"
import jwt from "jsonwebtoken";
import { InsertNewUser } from "../../model/verify/insert.newuser.model";

const VerifyControllar=async (req:Request,res:Response)=>{
    try{
        
        const {token}=req.params;
        const DecodeToken:any=jwt.verify(token,(process.env.secretKeyjwt) as string)
        

        if(!DecodeToken.name||!DecodeToken.email||!DecodeToken.password){
          throw {state:403,message:`there miss data in token`}
        }
        const {name,email,password}=DecodeToken;

        await InsertNewUser(name,email,password);

        res.status(200).send(`Regestration new account for email :${email}`);
    }
    catch(err:any){
        if(err.state==403){res.status(403).json(err.message)}
        else if(err.state==400){res.status(400).json(err.message)}
        else{
            res.status(400).json(`there issue in request`)
        }
    }
}

export {VerifyControllar}