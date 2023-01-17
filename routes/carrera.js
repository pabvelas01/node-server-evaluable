// Rutas para rol
const express=require('express');
const router=express.Router();
const  carreraController= require('../controllers/carreraController');

// api/carrera
router.post("/",carreraController.crearCarrera);
router.get("/",carreraController.listarCarreras);
router.delete("/:id",carreraController.eliminarCarrera);


module.exports= router;