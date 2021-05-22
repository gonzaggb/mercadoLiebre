/*.render es un metodo de EJS que indica a la aplicación que debe mostrar la pagina, similar al sendFile de express*/
const controller = {
    index: (req, res) => {
        return res.render('home') // renderizo el archivo home.ejs
    },
    registro: (req, res) => {
        return res.render('registro') // renderizo el archivo registro.ejs
    },
    login: (req, res) => {
        return res.render('login') // renderizo el archivo login.ejs
    }
}

module.exports = controller;
