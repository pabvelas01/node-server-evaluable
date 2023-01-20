const Alumno= require('../models/Alumno');
const Carrera= require('../models/Carrera');
// es lo que llega req
exports.crearAlumno= async (req,res)=>{
    try{
        let alumno
        // creamos nuestro producto
        let nombre=req.body.nombre?req.body.nombre:null;
        let primer_apellido=req.body.nombre?req.body.primer_apellido:null;
        let segundo_apellido=req.body.nombre?req.body.segundo_apellido:null;
        let carrera=req.body.carrera?req.body.carrera:null;
        let sexo=req.body.carrera?req.body.sexo:null;

        let carreraExiste=await Carrera.find({nombre:carrera});
        if (!carreraExiste){
            return res.status(400).send({status: "error" ,msg:"Carrera ingresada no existe"});
  
        }
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

exports.listarAlumnos= async (req,res)=>{
    try{
        let alumnos 
        // creamos nuestro producto
        let {nombre,primer_apellido,segundo_apellido,sexo,carrera}=req.body
        if (Object.keys(req.body).length==0){
           alumnos= await Alumno.find();
           res.status(200).send(alumnos);
       }
       else{
           // va con filtros 
          let class_query={};
          if (typeof nombre !='undefined' && nombre.length>0){
            let c={nombre:{ $regex: '' + nombre, $options: 'i' }}
            Object.assign(class_query,c);
          }
          if (typeof primer_apellido !='undefined' && primer_apellido.length>0){
            let c={primer_apellido:{ $regex: '' + primer_apellido, $options: 'i' }}
            Object.assign(class_query,c);
          }
          if (typeof segundo_apellido !='undefined' && segundo_apellido.length>0){
            let c={segundo_apellido:{ $regex: '' + segundo_apellido, $options: 'i' }}
            Object.assign(class_query,c);
          }
          if (typeof sexo !='undefined' && sexo.length>0){
            let c={sexo:{ $regex: '' + sexo, $options: 'i' }}
            Object.assign(class_query,c);
          }
          if (typeof carrera !='undefined' && carrera.length>0){
            let c={carrera:{ $regex: '' + carrera, $options: 'i' }}
            Object.assign(class_query,c);
          }

          console.log(class_query);
           alumnos= await Alumno.find(class_query).exec();
           res.status(200).send(alumnos);
       }
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}


exports.obtenerAlumno= async (req,res)=>{
    try{
       let alumno= await Alumno.findById(req.params.id);
       if(alumno){
           
           res.status(200).send(alumno); 
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

exports.actualizarAlumno= async (req,res)=>{
    try{
        let alumno
        // creamos nuestro producto
        let nombre=req.body.nombre?req.body.nombre:null;
        let primer_apellido=req.body.nombre?req.body.primer_apellido:null;
        let segundo_apellido=req.body.nombre?req.body.segundo_apellido:null;
        let sexo=req.body.nombre?req.body.sexo:null;
        let carrera=req.body.nombre?req.body.carrera:null;

        let carreraExiste=await Carrera.findOne({nombre:carrera});
        if(!carreraExiste){
            return res.status(400).send({status: "error" ,msg:"No existe carrera con nombre proporcionado"});
        }
        else{
        // buscar alumno
        let alumno= await Alumno.findById(req.params.id);
        if(!alumno){
            return res.status(400).send({status: "error" ,msg:"No existe alumno con id proporcionado"});
        }    
        
        alumno.nombre=nombre;
        alumno.primer_apellido=primer_apellido;
        alumno.segundo_apellido=segundo_apellido;
        alumno.sexo=sexo;
        alumno.carrera=carrera;
        //await carrera.save();
        alumno =await Alumno.findByIdAndUpdate({_id:req.params.id},alumno,{new:true}); 
        res.status(200).send(alumno);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
    
}