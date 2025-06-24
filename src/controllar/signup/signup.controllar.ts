import { Request,Response } from "express"
import { ValditionFormateEmail } from "../../functons/valdition/valdtion.email";
import { SingupNewUserModel } from "../../model/signup/signup.newuser.model";

const SignupControlaar= async (req:Request,res:Response)=>{

    try{ 
        const {name,email,password}=req.body;
        await ValditionFormateEmail(email);
        const emaill=await SingupNewUserModel(name,email,password)
        res.status(200).json(emaill);

    }
    catch(err:any){
        if(err.state==403){res.status(403).json(err.message)}
        else if(err.state==400){res.status(400).json(err.message)}
        else{
            res.status(400).json(`there issue in request`)
        }
    }
}

export {SignupControlaar}