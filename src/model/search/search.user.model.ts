import mongoose,{connect} from "mongoose";
import { User } from "../schema/user.schema";

const SearchUserModel=async (iduser:string)=>{
 try{
   await connect(process.env.MONGODB_URI as string);
   const DataUser=await User.findById(iduser);
   if(!DataUser || DataUser==null){
    throw {state:403 ,message:`Not found any user have this id`}
   }
   return {id:DataUser._id,name:DataUser.name}  
 }
 catch(e){throw e}
 finally{await mongoose.connection.close()}
}

export {SearchUserModel}
