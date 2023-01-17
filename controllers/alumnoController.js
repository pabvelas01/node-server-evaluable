const Alumno= require('../models/Alumno');
// es lo que llega req
exports.crearAlumno= async (req,res)=>{
    try{
        let alumno
        // creamos nuestro producto
        let nombre=req.body.nombre?req.body.nombre:null;
        let primer_apellido=req.body.nombre?req.body.primer_apellido:null;
        let segundo_apellido=req.body.nombre?req.body.segundo_apellido:null;

        let alumnoExiste=await Alumno.findOne({nombre:nombre,primer_apellido:primer_apellido,segundo_apellido:segundo_apellido});
        if(alumnoExiste){
            return res.status(400).send({status: "error" ,msg:"Ya existe alumno con nombres y apellidos ingresados"});
        }
        else{

        alumno = new Alumno(req.body);
        await alumno.save();
        res.status(200).send(alumno);
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

exports.eliminarAlumno= async (req,res)=>{
    try{
       let alumno= await Alumno.findById(req.params.id);
       if(alumno){
           await Alumno.findByIdAndRemove({_id : req.params.id });
           res.status(200).send({msg:"Alumno eliminada con exito",status:"exito"}); 
       }
       else{
        res.status(404).send({msg:"Alumno no existe",status:"error"});
       }
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }

}

exports.listarAlumnos= async (req,res)=>{
    try{
        let alumnos 
        // creamos nuestro producto
        alumnos= await Alumno.find();
        res.status(200).send(alumnos);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}