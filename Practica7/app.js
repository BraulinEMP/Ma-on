const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1 style = "color:red;">Bienvenido al Inicio!</h1>'))

app.get('/Nosotros', (req, res) => res.send('<h1 style = "color:red;">Bienvenido a Nosotros</h1>!'))

app.get('/Productos', (req, res) => res.send('<h1 style = "color:red;">Bienvenido a Productos!</h1>!'))

app.get('/Contactos', (req, res) => res.send('<h1 style = "color:red;">Bienvenido a Contactos!</h1>!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))