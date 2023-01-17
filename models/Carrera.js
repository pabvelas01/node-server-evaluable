const mongoose= require('mongoose');

const CarreraSchema= mongoose.Schema({
    nombre: {
        type: String,
        required:true,
        unique: true
    },
    nomenclatura: {
        type: String,
        required:true,
        unique: true
    },
    fechaCreacion: {
        type: Date,
        default:Date.now()
    },
});


module.exports= mongoose.model('Carrera',CarreraSchema)