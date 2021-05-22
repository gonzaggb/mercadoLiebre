const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')
const path = require('path')
const app = express()
publicPath = path.join(__dirname,'../public')
app.use(express.static(publicPath));

router.get('/', mainController.index) // en caso de recibir solo la barra voy a la propiedar index del controlador main
router.get('/login', mainController.login) // en caso de recibir solo la barra voy a la propiedar login del controlador main
router.get('/registro', mainController.registro) // en caso de recibir solo la barra voy a la propiedar registro del controlador main


module.exports = router;