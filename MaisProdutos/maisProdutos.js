var array_produtos = [['Absolut', 'Absolut.jpg', 'Vodka Absolut 1 Litro', "R$ 85,00 à vista", false],
                    ['Balalaika', 'Balalaika.jpg', 'Vodka Balalaika 1 Litro', "R$ 15,00 à vista" , false],
                    ['Belvedere', 'Belvedere.jpg', 'Vodka Belvedere 1 Litro',  "R$ 130,00 à vista", false],
                    ['JackDaniels', 'JackDaniels.jpg', 'Whiskey Jack Daniels 1 Litro', "R$ 145,00 à vista", false],
                    ['Skyy', 'Skyy.jpg', 'Vodka Sky 1 Litro', "R$ 30,00 à vista", false],
                    ['Smirnoff', 'Smirnoff.png', 'Vodka Smirnoff 1 Litro', "R$ 35,00 à vista", false],
                    ["Colorado Appia", "ColoradoAppia.jpg", "Cerveja Colorado Appia 600 Ml", "R$ 11,99 à vista", false],
                    ["BierBaum Lager", "BierBaumLager.jpg", "Cerveja BierBaum Lager 600 Ml", "R$ 8,99 à vista", false],
                    ["Heineken", "Heineken.jpg", "Cerveja Heineken P.Malte 330 Ml", "R$ 22,95 à vista", false],
                    ["Erdinger", "Erdinger.jpg", "Cerveja Erdinger Weissbier 500 Ml", "R$ 16,95 à vista", false],
                    ["Guinness", "Guinness.jpg", "Cerveja Guinness 440 Ml", "R$ 25,99 à vista", false],
                    ["Skol Beats", "SkolBeats.jpg", "Skol Beats 313 Ml", "R$ 24,00 à vista", false]]
                    // ADICIONAR MAIS BEBIDAS!!!
             
var array_carrinho = []

var banco = window.localStorage;
var dados = JSON.parse(banco.getItem("lista_compras")); //verificar
var contador = 0 // verificar


$(document).ready(function() {

    $('#pagCarrinho').click(function () {
        window.location.href = "../PagCarrinho/pagCarrinho.html";
    });
    mostrarProdutos()

})

function mostrarProdutos() {
    $(".produtos").html("")

    for (var i = 0; i < array_produtos.length; i++) {
        var conteudo = ""
        
        conteudo += '<div class="card" style="width: 18rem;">'
        conteudo +=     '<img src="./Imagens/' + array_produtos[i][1] + '" class="card-img-top" alt="...">'
        conteudo +=     '<div class="card-body">'
        conteudo +=         '<h5 class="card-title">' + array_produtos[i][0] + '</h5>'
        conteudo +=         '<p class="card-text">' + array_produtos[i][2] + '</p>'
        conteudo +=         '<b class="card-text">' + array_produtos[i][3] + '</b>'
        if (array_produtos[i][4] == false) {
            conteudo += '<button type="button" class="btn btn-primary" id_bebida="' + i + '">Adicionar ao Carrinho</button>'
        } else {
            conteudo += '<button type="button" class="btn btn-success" id_bebida="' + i + '">Adicionado!</button>'
        }
        conteudo +=     '</div>'
        conteudo += '</div>'

        
        $(".produtos").append(conteudo)
    }

    $(".btn-primary").click(function() {
        /*
        if (dados != null) {
            console.log(dados)
            for (var i = 0; i < array_produtos.length; i++) {
                array_carrinho.push(dados[i])
            }
        }
        */
        var id = $(this).attr("id_bebida")

        array_produtos[id].splice(4, 1, true)

        array_carrinho.push(array_produtos[id])
        if (dados != null && contador < 1) {
            contador = 1
            for (var i = 0; i < dados.length; i++) {
                array_carrinho.push(dados[i]) // verificar
            }
        }


        addCarrinhoLocalStorage()
        
        mostrarProdutos()
    })

}

function addCarrinhoLocalStorage() {
    banco.setItem("lista_compras", JSON.stringify(array_carrinho));
}