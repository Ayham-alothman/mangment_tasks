import mongoose,{connect} from 'mongoose';
import { User } from '../schema/user.schema';
import { GenerateToken } from './generate.token.model';
import { SendEmailLink } from './send.email.model';

const SingupNewUserModel=async (name:string,email:string,password:string)=>{
    try{
       await connect(process.env.MONGODB_URI as string);
       const ScanEmail=await User.findOne({email:email});
       if(ScanEmail!=null){throw {state:403,message:'the email found before'}}
       const ScanName=await User.findOne({name:name});
       if(ScanName!=null){throw {state:403,message:'the name found before'}}
       
       const token =await GenerateToken(name,email,password);

       await SendEmailLink(token,email);
       return
       
       
       
    }
    catch(err){throw err}
    finally{await mongoose.connection.close()}
}

export {SingupNewUserModel}