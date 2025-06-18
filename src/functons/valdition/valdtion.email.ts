import validator from 'validator';


const ValditionFormateEmail=async (email:string)=>{
    try{
        const Check:boolean=validator.isEmail(email);
        if(Check){return}
        else{throw {state:400,message:`the email formate not correct`}}
    }
    catch(err){
        throw err
    }
}

export {ValditionFormateEmail}

