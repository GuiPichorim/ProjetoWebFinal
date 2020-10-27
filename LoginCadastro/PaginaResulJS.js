var banco = window.localStorage;

$(document).ready(function() {
    fLocalMostraDados();
});


//????? não existe botãoo ainda na página
$('#bVoltando').click(function () {
        window.location.href = "index.html";
});

function fLocalMostraDados(){

    var dados = JSON.parse(banco.getItem("dadosUsuarios"));

    $("#tabelaUsuarios").html("");

    for(var i = 0; i < dados.length; i++){
        var conteudo = "";
        conteudo += "<tr>";
        conteudo += "<td>" + dados[i][0] + "</td>";
        conteudo += "<td>" + dados[i][1] + "</td>";
        conteudo += "<td>" + dados[i][2] + "</td>";
        conteudo += "<td>" + dados[i][3] + "</td>";
        conteudo += "<td>" + dados[i][4] + "</td>";
        conteudo += "<td>" + dados[i][5] + "</td>";
        conteudo += "</tr>";

        $("#tabelaUsuarios").append(conteudo);
    }
}
