const Rol= require('../models/Rol');
// es lo que llega req
exports.crearRol= async (req,res)=>{
    try{
        let rol 
        // creamos nuestro producto
        rol = new Rol(req.body);
        await rol.save();
        res.send(rol);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}

exports.listarRoles= async (req,res)=>{
    try{
        let roles 
        // creamos nuestro producto
        roles= await Rol.find();
        res.status(200).send(roles);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}