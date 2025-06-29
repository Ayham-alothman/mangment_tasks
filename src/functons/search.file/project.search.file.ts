import fs from 'fs';
import path from 'path';

const SearchProjectFile=async (idproject:string)=>{

    try{
        const pathProject=path.join(__dirname,`../../../public/uploads/projects/`,idproject)
        const DataFile=fs.readFileSync(pathProject);
        return DataFile

    }
    catch(e:any){return false}
}

export {SearchProjectFile};