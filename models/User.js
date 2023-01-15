const mongoose= require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const sha1 = require('sha1');

const UserSchema= mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique: true
    }, fechaCreacion: {
        type: Date,
        default:Date.now()
    },
    password: { type: String, required: true }
});



UserSchema.pre('save', async function(next) { // this line
    const user_here = this;
    console.log(user_here);
    console.log(user_here.isModified);
    console.log(user_here.isModified());
    console.log(user_here.isModified('password'));
    if (!user_here.isModified('password')) return next();
    console.log('just before saving...');
    user_here.password = await  sha1(user_here.password);;
    console.log('just before saving...');
    next();
});



module.exports= mongoose.model('User',UserSchema)