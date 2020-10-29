var banco = window.localStorage;
var dados = JSON.parse(banco.getItem("lista_compras"));

$(document).ready(function() {
    if (dados == null) {
        carrinhoVazio()
    }
    mostrarProdutos();
});


function mostrarProdutos() {
    $(".produtos").html("")

    for (var i = 0; i < dados.length; i++) {
        var conteudo = ""
        
        if (dados[i][4] == false) {
            continue
        }
        conteudo += '<div class="card" style="width: 18rem;">'
        conteudo +=     '<img src="./Imagens/' + dados[i][1] + '" class="card-img-top" alt="...">'
        conteudo +=     '<div class="card-body">'
        conteudo +=         '<h5 class="card-title">' + dados[i][0] + '</h5>'
        conteudo +=         '<p class="card-text">' + dados[i][2] + '</p>'
        conteudo +=         '<b class="card-text">' + dados[i][3] + '</b>'
        conteudo +=     '<button type="button" class="btn btn-danger" id_bebida="' + i + '">Retirar</button>'
        conteudo +=     '</div>'
        conteudo += '</div>'
        
        
        $(".produtos").append(conteudo)
    }

    $(".btn-danger").click(function() {
        localStorage.clear()
        var id = $(this).attr("id_bebida")

        dados[id].splice(4, 1, false)

        addCarrinhoLocalStorage() 
        mostrarProdutos()
    })
}

function addCarrinhoLocalStorage() {
    banco.setItem("lista_compras", JSON.stringify(dados));
}

function carrinhoVazio() {
    var conteudo = ""

    conteudo += '<div class="alert alert-primary" role="alert">'
    conteudo +=     'Você tem <a href="#" class="alert-link">0</a> produtos no seu Carrinho de Compras.'
    conteudo += '</div>'

    $(".alerta").append(conteudo)
    
}