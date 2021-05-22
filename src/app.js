const express = require('express') // trae el modulo de express para poder montar el servidor
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mainRoute = require('./routes/main') // defino la ruta de main

publicPath = path.join(__dirname,'../public') // indica que la ruta contiene recursos estaticos para consumir de manera sencilla
console.log(publicPath);

app.use(express.static(publicPath)); //indica que los archivos son publicos
app.listen(port,()=>console.log('Servidor corriendo en '+ port))
/*HAY QUE INSTALAR npm install ejs --save para poder utilizar el template engine*/
app.set('view engine', 'ejs') // configuro el template engine
app.use('/', mainRoute) // defino a donde ir en caso de ingresar "/", voy al siguiente archivo const mainRoute = require('./routes/main')


