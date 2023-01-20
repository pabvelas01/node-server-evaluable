// Rutas para rol
const express=require('express');
const router=express.Router();
const  carreraController= require('../controllers/carreraController');

// api/carrera
router.post("/",carreraController.listarCarreras);


module.exports= router;