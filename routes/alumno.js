// Rutas para rol
const express=require('express');
const router=express.Router();
const  alumnoController= require('../controllers/alumnoController');

// api/carrera
router.post("/",alumnoController.crearAlumno);
router.get("/",alumnoController.listarAlumnos);
router.delete("/:id",alumnoController.eliminarAlumno);


module.exports= router;