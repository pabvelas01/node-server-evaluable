// Rutas para rol
const express=require('express');
const router=express.Router();
const  userController= require('../controllers/userController');

// api/rol
router.post("/",userController.crearUser);
router.get("/",userController.listarUsuarios);
router.delete("/:id",userController.eliminarUser);


module.exports= router;