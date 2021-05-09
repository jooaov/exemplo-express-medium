//config express

import express from 'express';

const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

//porque do array
var users = []

//fim porque do array

//rotas
//list
app.get('/usuarios', (req, res) => {
    res.send('Hello World!')
})

//fim rotas

//http types
//create
app.post('/usuarios', (req, res) => {
    res.send('Hello World!')
})

//edit
app.put('/usuarios', (req, res) => {
    res.send('Hello World!')
})

//delete
app.delete('/usuarios', (req, res) => {
    res.send('Hello World!')
})

//fim http types