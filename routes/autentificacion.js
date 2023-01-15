// Rutas para rol
const express=require('express');
const router=express.Router();
const  userController= require('../controllers/userController');

// api/rol
router.post("/",userController.autentificarUsuario);


module.exports= router;