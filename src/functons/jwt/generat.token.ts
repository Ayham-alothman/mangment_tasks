import {sign} from 'jsonwebtoken'

const GenerateToken=async (data:any)=>{
    try{
        const token=sign(data,process.env.secretKeyjwt as string);
        return token;
    }
    catch(err){throw err}

}

export {GenerateToken}