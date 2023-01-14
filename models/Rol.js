const mongoose= require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const RolSchema= mongoose.Schema({
    descripcion: {
        type: String,
        required:true,
        unique: true
    }, fechaCreacion: {
        type: Date,
        default:Date.now()
    },
});

RolSchema.plugin(uniqueValidator);

module.exports= mongoose.model('Rol',RolSchema)