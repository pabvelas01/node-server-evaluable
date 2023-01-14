const express =require('express');
const conectaDB= require('./config/db');
const cors= require('cors');
// creamos el servidor 
const app= express(); 
conectaDB();
// sin esta linea no se puede ingresar json como input
app.use(express.json());
app.use(cors());
app.use('/api/rol',require('./routes/rol'));
app.use('/api/user',require('./routes/user'));
app.listen(4000, ()=>{
    console.log("El servidor esta corriendo perfectamente");
});