import mongoose ,{connect} from 'mongoose';
import { User } from '../schema/user.schema';


const AddFavoriteModel=async (idOwn:string,idNew:string)=>{
    try{
        await connect(process.env.MONGODB_URI as string)
        const DataOwnUser=await User.findById(idOwn);
        const DataNewUser=await User.findById(idNew);
        if(DataNewUser==null||DataOwnUser==null){
            throw {state:400 ,message :`there miss data`}
        }
        for(let user of DataOwnUser.favorite_user){
          if(user.name==DataNewUser.name){throw{state:403,message:`the name found before`}}
        }
        const Res=await User.findByIdAndUpdate(
            idOwn,
            { $push: { favorite_user: { id: DataNewUser._id, name: DataNewUser.name } } },
            { new: true } 
        );
        
        return;
    }

    catch (err) {
        throw err;
      } 
    finally {
        await mongoose.connection.close();
      }
    
}

export {AddFavoriteModel}