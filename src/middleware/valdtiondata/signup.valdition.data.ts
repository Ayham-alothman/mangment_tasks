import { NextFunction, Request,Response } from "express"

const SignupValditionData=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        if(!req.body.name||!req.body.email||!req.body.password){
            throw {state:400,message:"there miss data"}
        }

        next()
    }
    catch(err:any){
        if(err.state==403){res.status(403).json(err.message)}
        else if(err.state==400){res.status(400).json(err.message)}
        else{
            res.status(400).json(`there issue in request`)
        }
    }
}

export {SignupValditionData}