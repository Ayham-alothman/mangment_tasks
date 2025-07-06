import mongoose ,{connect} from 'mongoose';
import { User } from '../schema/user.schema';


const RemoveFavoriteModel=async (idOwn:string,idNew:string)=>{
    try{
        await connect(`mongodb://localhost:27017/Tasker`)
        const DocUser:any=await User.findById(idNew);
        if(!DocUser){throw {state:403,message:`not found user have this id:${idNew} `}}
        
        const result = await User.updateOne(
            { _id: idOwn },
            { $pull: { favorite_user: { id: idNew } } }
          );
          console.log(result.modifiedCount)
          // Check if the update was successful
          if (result.modifiedCount > 0) {
            return
          } else {
            throw {state:403,message:`Favorite user not found or already removed`}
          }
    }

    catch (err) {
        throw err;
      } 
    finally {
        await mongoose.connection.close();
      }
    
}

export {RemoveFavoriteModel}

