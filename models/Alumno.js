const mongoose= require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const AlumnoSchema= mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    primer_apellido: {
        type: String,
        required:true
    },
    segundo_apellido: {
        type: String,
        required:true
    },
    sexo: {
        type: String,
        required:true
    },
    carrera: {
        type: String,
        required:true
    },
    
    fechaCreacion: {
        type: Date,
        default:Date.now()
    },
});


module.exports= mongoose.model('Alumno',AlumnoSchema)