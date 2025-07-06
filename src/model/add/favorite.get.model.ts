import mongoose ,{connect} from 'mongoose';
import { User } from '../schema/user.schema';


const GetFavoriteModel=async (idUser:string)=>{
    try{
        await connect(`mongodb://localhost:27017/Tasker`)
        const DocUser=await User.findById(idUser);
        if(DocUser){return DocUser.favorite_user}
        else{throw {state:403,message:`the id not found`}}
    }

    catch (err) {
        throw err;
      } 
    finally {
        await mongoose.connection.close();
      }
    
}

export {GetFavoriteModel}

