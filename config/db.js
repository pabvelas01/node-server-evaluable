const mongoose = require ('mongoose');
mongoose.set('strictQuery', false);
require ('dotenv').config({path:'variables.env'})

const conectarDB= async ()=>{
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            
             });
        console.log('DB Conectada');
    }
    catch (err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = conectarDB