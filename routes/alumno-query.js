// Rutas para rol
const express=require('express');
const router=express.Router();
const  alumnoController= require('../controllers/alumnoController');

// api/carrera
router.post("/",alumnoController.listarAlumnos);


module.exports= router;