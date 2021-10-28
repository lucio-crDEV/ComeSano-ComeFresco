//Importar packages
const express = require('express')
const exphbs = require("express-handlebars");
const path = require('path')
const app = express()

//definiendo puerto para levantar el servidor 
app.listen(3000, console.log("Servidor en puerto 3000"))

//Condigurando el engine que se usará: hablandebars
app.set("view engine", ".hbs");

//Configuración del motor de plantillas handlebars utilizando el método engine.
app.engine(
    ".hbs",
    exphbs({
        extname: ".hbs",
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'views/mainLayouts'),
        partialsDir: path.join(__dirname, 'views/componentes'),
        helpers: {
            bienvenida: (() => {
                return 'Bienvenido al Mercado!!'
            })
        }
    })
);

// Utilizando librerias instaladas (bootstrap y jquery) // Incluyendo middlewares
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/node_modules/bootstrap-icons/icons"))
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use(express.static(__dirname + "/node_modules/jquery/dist"))


app.get('/', (req, res) => {
    res.render("home", {
        productos: ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']
    })
})


