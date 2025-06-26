import {Request,Response, NextFunction } from "express";
import {decode} from 'jsonwebtoken'


const ValditionToken=async (req:Request,res:Response,next:NextFunction)=>{
 try{
   
    
    if(!req.cookies.token){throw {state:403,message:`do't have token in this request`}}
    const token:string=req.cookies.token;
    const data=decode(token); 
    if(data){
        res.locals.tokendata=data
           
        next()
    }
    else{throw{state:400,message:`there problem in token send`}}

 }
 catch(err:any){
    if(err.state&&err.message){
        res.status(err.state).json(err.message)
    }
    else{ 
        res.status(400).json(`there issue in request`)
    }
 }
}

export {ValditionToken}