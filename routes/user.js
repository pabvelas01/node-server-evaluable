// Rutas para rol
const express=require('express');
const router=express.Router();
const  userController= require('../controllers/userController');

// api/rol
router.post("/",userController.crearUser);
router.get("/",userController.listarUsuarios);


module.exports= router;