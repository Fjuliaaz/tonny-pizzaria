
const {usuario, categorias, produtos} = require('./api.js')

const usuario = function() {
    const usuarioHost = [];
    const jsonUsuarios = {};
    let status = false;

    usuario.cadastro.forEach(usuario => {
        usuarioHost.push({
            nomeUsuario: usuario.nomeUsuario,
            email: usuario.email,
            telefone: usuario.telefone,
            endereco: usuario.endereco
        });
        status = true;
    });

    jsonUsuarios.usuario = usuarioHost;

    if (status) {
        return jsonUsuarios;
    } else{
        return false;
    }
};

const getCategoria = function(){
    const categoriaLocal = [];
    const jsonCategorias = {};
    let status = false; 

    categoria.categoria.forEach(itemCategoria => {
        categoriaLocal.push({
            id: itemCategoria.id,
            nome: itemCategoria.nome,
            imagem: itemCategoria.imagem
        });
        status = true;
    });

    jsonCategorias.categoria = categoriaLocal; 

    if (status) {
        return jsonCategorias;
    } else{
        return false;
    }

}

const produtos = function() {
    const produtos = [];
    const jsonprodutos = {};
    let status = false;

    produtos.produtos.forEach(produto => {
        produtos.push({
            id: produto.id,
            nome: produto.nome,
            comentarios: 
        })
        
        status = true;
    });

    jsonprodutos.produtos = produto
}

module.export ={usuario,categorias,produtos}


