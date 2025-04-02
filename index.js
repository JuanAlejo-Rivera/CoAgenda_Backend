require('dotenv').config();
const cors = require('cors')

const express = require('express');
const { dbConection } = require('./database/config');


//Crear el servidor de express
const app = express();

//Base de datos
dbConection();

//CORS, esto restringe el acceso a la API desde otros dominios
//es una medida de seguridad para evitar ataques de cross-site scripting (XSS)
app.use(cors());

// Servir archivos estáticos desde la carpeta "public"
//use es middleware, se ejecuanta cuando alguien hace una peticion a mi servidor
app.use(express.static('public'));


//lectura y parseo del body
app.use(express.json());


// Importar y usar las rutas de autenticación
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))



//Escuchar peticiones
app.listen(process.env.PORT, () =>{
    console.log(`Servidor Corriendo en puerto ${process.env.PORT}`)
}) 