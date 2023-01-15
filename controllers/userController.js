const User= require('../models/User');
const sha1 = require('sha1');
// es lo que llega req
exports.crearUser= async (req,res)=>{
    try{
        let user
        // creamos nuestro producto
        let email=req.body.email?req.body.email:null;

        let userExiste=await User.findOne({email:email});
        if(userExiste){
            return res.send({status: "error" ,msg:"Ya existe mail registrado"});
        }
        else{

        user = new User(req.body);
        await user.save();
        res.send(user);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}

exports.autentificarUsuario= async (req,res)=>{
    try{
        let usuario
        //Obtener usuario por correo
        if (Object.keys(req.body).length==0){
            return res.status(404).send({status:"error",msg:"Debe ingresar email y contraseña"});
        }
        else{
            // ya tiene email y contraseña en body
            const {email,password}=req.body;
            usuario=await User.findOne({email:email});
            if(usuario){
                let pass_hasheada=await sha1(password);
                if(usuario.password==pass_hasheada){
                    return res.status(200).send({status:"exito",msg:"Usuario autentificado exitosamente"});
                }
                else{
                    return res.status(404).send({status:"error",msg:"Contraseña no coincide"});
                }
            }
            else{
                return res.status(404).send({status:"error",msg:"email no esta en los registros"});
            }

        }
        
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