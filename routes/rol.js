// Rutas para rol
const express=require('express');
const router=express.Router();
const  rolController= require('../controllers/rolController');

// api/rol
router.post("/",rolController.crearRol);
router.get("/",rolController.listarRoles);


module.exports= router;