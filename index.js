const express =require('express');
const conectaDB= require('./config/db');
// creamos el servidor 
const app= express(); 
conectaDB();
// sin esta linea no se puede ingresar json como input
app.use(express.json());
app.use('/api/rol',require('./routes/rol'));
app.listen(4000, ()=>{
    console.log("El servidor esta corriendo perfectamente");
});