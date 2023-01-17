const Carrera= require('../models/Carrera');
// es lo que llega req
exports.crearCarrera= async (req,res)=>{
    try{
        let carrera
        // creamos nuestro producto
        let nombre=req.body.nombre?req.body.nombre:null;

        let carreraExiste=await Carrera.findOne({nombre:nombre});
        if(carreraExiste){
            return res.status(400).send({status: "error" ,msg:"Ya existe carrera con nombre ingresado"});
        }
        else{

        carrera = new Carrera(req.body);
        await carrera.save();
        res.status(200).send(carrera);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}
/*
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
            usuario=await Carrera.findOne({email:email});
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
*/

exports.eliminarCarrera= async (req,res)=>{
    try{
       let carrera= await Carrera.findById(req.params.id);
       if(carrera){
           await Carrera.findByIdAndRemove({_id : req.params.id });
           res.status(200).send({msg:"Carrera eliminada con exito",status:"exito"}); 
       }
       else{
        res.status(404).send({msg:"Carrera no existe",status:"error"});
       }
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }

}

exports.listarCarreras= async (req,res)=>{
    try{
        let carreras 
        // creamos nuestro producto
        carreras= await Carrera.find();
        res.status(200).send(carreras);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}