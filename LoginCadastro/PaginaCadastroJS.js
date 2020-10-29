var dados = [];

var banco = window.localStorage;

$(document).ready(function(){

    $('#bCriar').click(function () {
        verificarVazios()
        //confirmarSenha()
        if (verificarTudo() == true) {
            alert("Usuario cadastrado.")
            addLista()
            limparInputs()
        } else {
            alert("Erro ao cadastrar, reveja os dados.")
        }
      
    });

    $('#bLocalStorage').click(function () {
        window.location.href = "PaginaResul.html";
    });

    $('#bVoltaPg').click(function () {
        window.location.href = "index.html";
    });
});

function verificarVazios() {
    var nome = $('#nome').val();
    var sobrenome = $('#sobrenome').val();
    var email = $('#email').val();
    var nomeUsuario = $('#nomeUsuario').val();
    var senha = $('#senha').val();
    var confirmarSenha = $('#confirmarSenha').val();

    if (nome == '') {
        //$('#nome').addClass("campo-login-erro")
        $("#labelNome").css({"color": "#FA5858"})
    } else {
        $("#labelNome").css({"color": ""})
        //$('#nome').removeClass("campo-login-erro")
    }
    if (sobrenome == '') {
        $("#labelSobrenome").css({"color": "#FA5858"})
    } else {
        $('#labelSobrenome').css({"color": ""})
    }
    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
    } else {
        $('#labelEmail').css({"color": ""})
    }
    if (nomeUsuario == '') {
        $("#labelUsuario").css({"color": "#FA5858"})
    } else {
        $('#labelUsuario').css({"color": ""})
    }
    if (senha == '') {
        $("#labelSenha").css({"color": "#FA5858"})
    } else {
        $('#labelSenha').css({"color": ""})
    }
    if (confirmarSenha == "") {
        $("#labelConfSenha").css({"color": "#FA5858"})
    } else {
        $('#labelConfSenha').css({"color": ""})
    }
}

function confirmarSenha() {
    var senha = $('#senha').val()
    var confirmarSenha = $('#confirmarSenha').val()
    
    if (senha != "" & confirmarSenha != "" && senha == confirmarSenha) {
        //alert("Senha OK")
        //$('#confirmarSenha').val("")
        //$('#senha').val("")
        $('#labelSenha').css({"color": ""})
        $("#labelConfSenha").css({"color": ""})
        return true
    } else if (senha != confirmarSenha){
        //alert("Erro Senha")
        $('#senha').css({"color": "#FA5858"})
        $('#confirmarSenha').css({"color": "#FA5858"})
        $('#labelSenha').css({"color": "#FA5858"})
        $("#labelConfSenha").css({"color": "#FA5858"})
        return false
    }

}

function verificarTudo() {
    var nome = $("#nome").val()
    var sobrenome = $("#sobrenome").val()
    var email = $("#email").val()
    var nomeUsuario = $("#nomeUsuario").val()
    var senha = $("#senha").val()
    var confirmaSenha = $("#confirmarSenha").val()

    if (nome == "" || sobrenome == "" || email == "" || nomeUsuario == "" || senha == "" || confirmaSenha == "") {
        //alert("Retornando falso")
        return false
    } else {
        //alert("indo bem")
        if (confirmarSenha() == true) {
            //alert("retornou true")
            return true
        } else {
            return false
        }
    }
}

function addLista() {
    var nome = $('#nome').val();
    var sobrenome = $('#sobrenome').val();
    var email = $('#email').val();
    var nomeUsuario = $('#nomeUsuario').val();
    var senha = $('#senha').val();
    var confirmarSenha = $('#confirmarSenha').val();

    var aux = [];
    aux.push(nome);
    aux.push(sobrenome);
    aux.push(email);
    aux.push(nomeUsuario);
    aux.push(senha);
    aux.push(confirmarSenha);
    dados.push(aux);

    banco.setItem("dadosUsuarios", JSON.stringify(dados));
}

function limparInputs() {
    $('#nome').val("");
    $('#sobrenome').val("");
    $('#email').val("");
    $('#nomeUsuario').val("");
    $('#senha').val("");
    $('#confirmarSenha').val("");

}