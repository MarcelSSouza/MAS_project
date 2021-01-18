var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var usuarios = []
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/registro.html")
})
app.post('/registro', (req, res) => {
    let email = req.body.email;
    let passsword = req.body.senha;
    let especie_pet = req.body.especie_pet;
    let sexo_pet = req.body.sexo_pet;
    let peso_pet = req.body.peso_pet;
    let idade_pet = req.body.idade_pet;
    let raca_pet = req.body.raca_pet;
    usuarios += [email, passsword, especie_pet, sexo_pet, peso_pet, idade_pet, raca_pet]
    console.log(usuarios)
})


app.post('/logar', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    let email = req.body.email;
    let passsword = req.body.senha;
    for (let x = 0; x < usuarios.length; x++) {
        if (usuarios[x][0] == email) {
            if (usuarios[x][1] == passsword) {
                res.sendFile(__dirname + '/menu.html')
            }
            else {
                res.end("Senha ou email incorretos!")
            }
        }
    }
})


app.listen(3000)