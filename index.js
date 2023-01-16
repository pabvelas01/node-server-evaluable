const express =require('express');
const conectaDB= require('./config/db');
const cors= require('cors');
const https= require('https');
const fs= require('fs');
// creamos el servidor 
const app= express(); 
conectaDB();
const PUERTO=4000; //443 defecto
// sin esta linea no se puede ingresar json como input
app.use(express.json());
app.use(cors());
app.use('/api/rol',require('./routes/rol'));
app.use('/api/user',require('./routes/user'));
app.use('/api/autentificacion',require('./routes/autentificacion'));

app.listen(4000, ()=>{
    console.log("El servidor esta corriendo perfectamente");
});



https.createServer({
    cert:fs.readFileSync('server.crt'),
    key:fs.readFileSync('server.key')},app).listen(PUERTO,function(){
        console.log("server corriendo https");
    });