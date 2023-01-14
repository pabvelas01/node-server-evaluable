const User= require('../models/User');
// es lo que llega req
exports.crearUser= async (req,res)=>{
    try{
        let user
        // creamos nuestro producto
        user = new User(req.body);
        await user.save();
        res.send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}

exports.listarUsuarios= async (req,res)=>{
    try{
        let usuarios 
        // creamos nuestro producto
        usuarios= await User.find();
        res.status(200).send(usuarios);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}