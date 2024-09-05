import fs from 'fs';
const thePath="./public/img/shounen"
fs.readdir( thePath, 
    (err, files)=>{files.forEach((f, idx)=>{console.log(`import shounen_${idx} from "../../public/img/isekai/${f}"`)})})