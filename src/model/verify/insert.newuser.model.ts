import mongoose,{connect} from "mongoose"
import { User } from "../schema/user.schema"


import {hashSync} from 'bcrypt'

const InsertNewUser=async (name:string,email:string,password:string)=>{

    try{
        await connect(process.env.MONGODB_URI as string);
        const HashPassword=hashSync(password,10)

        await User.insertOne({name:name,email:email,password:HashPassword});
        return;
    }
    catch(err){throw err}
    finally{await mongoose.connection.close()}

}

export {InsertNewUser}