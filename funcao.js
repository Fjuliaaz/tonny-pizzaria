
const user = require('./api.js')

const getUsuario = function() {
    let usuarios = user.usuario
    let usuariosArray = []

    usuarios.forEach((usuarios) => {

        let usuariosInfo = {
            id: usuarios.id,
            nome: user.nome,
            email: usuarios.email,
            telefone: usuarios.telefone,
            endereco: user.endereco
        }

        usuariosArray.push(usuariosInfo)
    })
     
    let usuariosJSON = { usuariosArray }
    return usuariosJSON
};

//função que pega as informacoes de um produto atravez do seu nome
const getProduto = function (nomeProduto) {
    let cont = 0
    let status = false
    let jsonProduto = {}
    while (cont < info.produtos.produto.length) {
        if (nomeProduto == info.produtos.produto[cont].nome) {

            jsonProduto.nome = info.produtos.produto[cont].nome
            jsonProduto.preco = info.produtos.produto[cont].preco
            jsonProduto.descricao = info.produtos.produto[cont].descricao
            jsonProduto.comentarios = info.produtos.produto[cont].comentarios
            status = true
        }
        cont++
    }
    if (status) {
        return jsonProduto
    }
    else {
        return status
    }

}

const getCategoria = function (tipo) {
    let categorias = api.js.categorias
    let categoriasArray = []
    
    categorias.forEach((categoria) => {
        
        let categoriaInfo = {
            id: categoria.id,
            nome: categoria.nome,
            icone: categoria.icone 
        }    
        
        categoriasArray.push(categoriaInfo)

    })

    let categoriasJSON = { categoriasArray }
    return categoriasJSON
}

const comentarios = () => {
    let produtos = api.js.produtos
    let comentariosArray = []
    let idProduto = id
    let status = false
    
    produtos.forEach((pizza) => {
        
        if(pizza.id == idProduto){
            pizza.comentarios.forEach ((comentarios) => {
            
                let comentariosJSON = {
                    
                    id: comentarios.id,
                    comentarios: comentarios.message,
                    data: comentarios.data,
                    usuario: comentarios.usuario.id
                }
                
                status = true
                comentariosArray.push(comentariosJSON)

            })

        }

    })

    let comentariosJSON = { comentariosArray }

    if(status){
        return comentariosJSON
    } else {
        return false
    }
}

module.exports ={getUsuario,getCategoria,getProduto}


