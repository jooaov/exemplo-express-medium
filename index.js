//config express

import express from 'express';

const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

var users = []


//list
app.get('/usuarios', (req, res) => {
    res.json(users);
})


//create
app.post('/usuarios', (req, res) => {
    user = { id, nome, email } = req.body;

    const userIndex = users.findIndex(user => user.id = id);

    if (!userIndex === -1) {
        throw new Error('Id já existe');
    }
    //primeiro
    user = {
        id: id,
        nome: nome,
        email: email
    }

    //melhor
    user = {
        id,
        nome,
        email
    }

    //melhor ainda
    user = { id, nome, email } = req.body;

    users.push(user);

    return user;
})

//edit
app.put('/usuarios/:id', (req, res) => {
    // const userOld = users.find(user => user.id = req.params.id);
    const userIndex = users.findIndex(user => user.id = req.params.id);
    const userNew = { nome, email } = req.body;

    if (userIndex === -1) {
        throw new Error('Id não existe');
    }

    //forma pior
    if (user.nome) {
        users[userIndex].nome = user.nome
    }
    if (user.email) {
        users[userIndex].email = user.email
    }

    //melhor forma
    users[userIndex].nome = user.nome ? user.nome : users[userIndex].nome
    users[userIndex].email = user.email ? user.email : users[userIndex].email

    return users[userIndex];
})

//delete
app.delete('/usuarios/:id', (req, res) => {
    const userIndex = users.findIndex(user => user.id = req.params.id);
    delete users[userIndex];
})