const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const main = express();

main.use((request,response,next) =>{
    response.header('Acess-Control-Allow-Origin','*');
    response.header('Acess-Control-Allow-Methods', 'GET');
    app.use(cors())
    
    next();
})


main.get('/api.js/usuario/email', cors(), async function (request, response, next) {

    let entrada = request.params.email
    let funcoes = require('./api.js')
    let usuariosInfo = funcoes.usuario(entrada)

    if (usuario) {
        response.json(usuarios)
        response.status(200)
    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})

main.get('/produto/produtos', cors(), async function (request, response, next) {

    let entrada = request.params.produto
    let funcoes = require('./api.js')
    let dados = funcoes.getProduto(entrada)

    if (dados) {
        response.json(dados)
        response.status(200)
    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})


main.get('/produto/categoria/categorias', cors(), async function (request, response, next) {
    console.log("pega td da msm categoria");

    let entrada = request.params.categoria
    let funcoes = require('./api.js')
    let dados = funcoes.getCategoria(entrada)

    console.log(dados);
    if (dados) {
        response.json(dados)
        response.status(200)
    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})


main.get('/usuario', cors(), async function (request, response, next) {
    let email = request.query.email
    let senha = request.query.senha

    let controleDados = require('./api.js')
    let dados = controleDados.getCadastro(email, senha)

    if (dados) {
        response.json(dados)
        response.status(200)
    }
    else {
        response.status(404);
        response.json({ erro: 'Senha incorreta' })
    }
});


main.listen(8080, function () {
    console.log('API funcionando porraaaaaaaaa!')
})