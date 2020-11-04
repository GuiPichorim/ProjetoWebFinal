$(document).ready(function(){
    $("#bCarrinho").click(function() {
        window.location.href = "../PagCarrinho/pagCarrinho.html"
    })

    $('#bOutraPg').click(function () {
        window.location.href = "PaginaCadastro.html";
    });
    $('#bAcessar').click(function () {
        verificarVazios()
        if (verificarTudo() == true) {
             if (acessar() == true) {
                alert("Acesso permitido")
                // Começa
                var acesso = true
                var banco = window.localStorage;
                banco.setItem("acessoPermitido", JSON.stringify(acesso));
                // Termina
                window.location.href = "../index.html"
             } else {
                alert("Acesso negado")
             }
        } else {
            alert("Erro de acesso, reveja seus dados")
        }

    });
});

function verificarVazios() {
    var nome = $('#nome').val();
    var senha = $('#senha').val();
        
    if (nome == '') {
        $('#labelUsuario').css({"color": "#FA5858"})
    } else{
        $('#labelUsuario').css({"color": ""})
    }
    if (senha == '') {
        $('#labelSenha').css({"color": "#FA5858"})
    } else{
        $('#labelSenha').css({"color": ""})
    }
}

function verificarTudo() {
    var nome = $('#nome').val();
    var senha = $('#senha').val();

    if (nome == "" || senha == "") {
        return false
    } else {
        return true
    }
}

function acessar() {
    var banco = window.localStorage;
    var dadosUsuarios = JSON.parse(banco.getItem("dadosUsuarios"));
    var nome = $('#nome').val();
    var senha = $('#senha').val();

    if (dadosUsuarios == null) {
        return false
    }

    for (var i = 0; i < dadosUsuarios.length; i++) {
        if (dadosUsuarios[i][3] == nome && dadosUsuarios[i][4] == senha) {
            return true
        }
    }
    return false
}