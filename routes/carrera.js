// Rutas para rol
const express=require('express');
const router=express.Router();
const  carreraController= require('../controllers/carreraController');

// api/carrera
router.post("/",carreraController.crearCarrera);
router.put("/:id",carreraController.actualizarCarrera);
router.get("/",carreraController.listarCarreras);
router.get("/:id",carreraController.obtenerCarrera);
router.delete("/:id",carreraController.eliminarCarrera);


module.exports= router;