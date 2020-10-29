$(document).ready(function(){
    $('#bOutraPg').click(function () {
        window.location.href = "PaginaCadastro.html";
    });
    $('#bAcessar').click(function () {
        verificarVazios()
        if (verificarTudo() == true) {
             if (acessar() == true) {
                alert("Acesso permitido")
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
    var dados = JSON.parse(banco.getItem("dadosUsuarios"));
    var nome = $('#nome').val();
    var senha = $('#senha').val();

    if (dados == null) {
        return false
    }

    for (var i = 0; i < dados.length; i++) {
        if (dados[i][3] == nome && dados[i][4] == senha) {
            return true
        }
    }
    return false
}