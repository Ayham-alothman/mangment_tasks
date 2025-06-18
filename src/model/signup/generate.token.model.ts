import jwt from 'jsonwebtoken';


const GenerateToken=async (name:string,email:string,password:string)=>{
    try{
        const payload={name,email,password};
        const keyofjwt=process.env.secretKeyjwt as string;

        const token=jwt.sign(payload,keyofjwt,{expiresIn:'1h'});
        return token;

    }
    catch(err){throw err}
}

export {GenerateToken};
