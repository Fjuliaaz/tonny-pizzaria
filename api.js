var usuario = {
    usuario:
    [{
    nome: 'Julia Fonseca',
    email: 'Julia123@gmail.com',
    senha: 'JuliaF',
    telefone: '119973459',
    id: 1,
       endereco[{
        rua: 'Bonita',
        bairo: 'Jardins das rosas',
        complemento: 'Casa 35 A',
        cep: '1345-7890'
       }]
        }
    ]

    [{
    nome: 'Raica Martinez',
    email: 'raica@gmail.com',
    senha: 'raica123',
    telefone: '119978892',
    id: 2,
       endereco[{
        rua: 'Copacabana',
        bairo: 'Jardins',
        complemento: 'Apto Bloco A 215',
        cep: '1345-5402'
       }]
        }
    ]

    [{
    nome: 'Joao Vitor',
    email: 'joaoVitor@gmail.com',
    senha: 'jv123',
    telefone: '1199010844',
    id: 1,
       endereco[{
        rua: 'Couves',
        bairo: 'Barueri',
        complemento: 'Casa 99',
        cep: '1345-0001'
       }]
        }
    ]
},

var categorias = {

    categoria: 
    [{
       id: 1,
       nomeCategoria:'Pizza inteira',
       icone:''
    }]

    [{
       id:2,
       nomeCategoria:'Bebidas',
       icone:''
    }]

    [{
       id: 3,
       nomeCategoria:'Sobremesas',
       icone:''
    }]
   
}

var produtos = {
    produtos: [
        {
            id: '1',
            produto: 'Pizza de calabresa com queijo',
            valor: 'R$ 16,00',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            avaliacao: "",
            [{
                usuario: usuario.usuario[1],
                data: "10/10/2023",
                comentaio: "prefiro pizza de frango"
            }]
        },

        {
            id: '2',
            produto: 'Pizza Pizza de peperonicom queijo e tomate',
            valor: 'R$ 22,00',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            avaliacao: "",
            [{
                usuario: usuario.usuario[2],
                data: "23/04/2023",
                comentaio: "prefiro pizza de frango"
            }]
        },

        {
            id: '3',
            produto: 'Pizza brotinho',
            valor: 'R$ 12,00',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            avaliacao: "",
            [{
                usuario: usuario.usuario[3] ,
                data: "15/02/2023",
                comentaio: "prefiro pizza de queijo"
            }]
        },

        {
            id: '3',
            produto: 'Coca-cola',
            valor: 'R$ 10,00',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            [{
                usuario: usuario.usuario[1],
                data: "24/11/2023",
                comentaio: "otima e geladinha"
            }]
        } 
    ]
}

module.export = {usuario,categorias,produtos}