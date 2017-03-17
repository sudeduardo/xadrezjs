function MatrizXadrez() {
    var matriz = [];

    for(var letter=65;letter<73;letter++)
    {
        var  char = String.fromCharCode(letter);
        matriz[char]=[];
        for (var j=1; j<=8; j++) {
            matriz[char][j]=null;
        }
    }
    return matriz;
}


xadrez = MatrizXadrez();

Peao_Preto = {cor:"Preto", icon:"♟",
    movimento:function (letra,numero) {
            casas =[];
            if(letra =="B"){
                casas[0]=[];
                casas[0]['letra'] = "D";
                casas[0]['numero']= numero;

                casas[1]=[];
                casas[1]['letra'] = "C";
                casas[1]['numero'] = numero;
            }else{
                letra = String.fromCharCode( letra.charCodeAt(0) +1);
                casas[0]=[];
                casas[0]['letra'] = (letra);
                casas[0]['numero']= (numero);
            }
        var casas_possiveis=[];
        for(var i =0; i<casas.length; i++){
            if(xadrez[casas[i].letra][casas[i].numero] == null){
                casas_possiveis.push(casas[i]);
            }
        }
        return casas_possiveis;
    }
}
Peao_Branco ={cor:"Branco", icon:"♙",
    movimento:function (letra,numero) {
        casas =[];
        if(letra =="G"){
            casas[0]=[];
            casas[0]["letra"] = "F";
            casas[0]["numero"]=numero;

            casas[1]=[];
            casas[1]["letra"]= "E";
            casas[1]["numero"] = numero;
        }else{
            casas[0]=[];
            letra = String.fromCharCode( letra.charCodeAt(0) -1);
            casas[0]['letra'] = letra;
            casas[0]['numero']= numero;
        }
        var casas_possiveis=[];
        for(var i =0; i<casas.length; i++){
            if(xadrez[casas[i].letra][casas[i].numero] == null){
                casas_possiveis.push(casas[i]);
            }
        }
        return casas_possiveis;
    }
}

Torre_Preto = {cor:"Preto", icon:"♜",
    movimento:function (letra,numero) {
        casas =[];
        var vetor;
        for(var letter=65;letter<73;letter++)
        {
            vetor=[];
            var  char = String.fromCharCode(letter);
            vetor['letra'] = char;
            vetor['numero']= numero;
            casas.push(vetor);
        }
        for (var j=1; j<=8; j++) {
            vetor=[];
            vetor['letra'] = letra;
            vetor['numero']= j;
            casas.push(vetor);
        }

        console.log(casas);
    }
}
Torre_Branco ={cor:"Branco", icon:"♖",
    movimento:function (letra,numero) {

    }}

Cavalo_Preto = {cor:"Preto", icon:"♞",
    movimento:function (letra,numero) {

    }};
Cavalo_Branco= {cor:"Branco", icon:"♘",
    movimento:function (letra,numero) {

    }};

Bispo_Preto = {cor:"Preto", icon:"♝",
    movimento:function (letra,numero) {

    }};
Bispo_Branco= {cor:"Branco", icon:"♗",
    movimento:function (letra,numero) {

    }};

Rei_Preto = {cor:"Preto", icon:"♚",
    movimento:function (letra,numero) {

    }};
Rei_Branco= {cor:"Branco", icon:"♔",
    movimento:function (letra,numero) {

    }} ;

Rainha_Preto = {cor:"Preto", icon:"♛",
    movimento:function (letra,numero) {

    }};
Rainha_Branco = {cor:"Branco", icon:"♕",
    movimento:function (letra,numero) {

    }};

function Numeros(tabuleiro) {
    var html = '<tr>';
    for (var k=0; k<=8; k++){
        if(!(k==0)){
            html = html +'<td>'+k+'</td>';
        }else{
            html = html +'<td></td>';
        }
    }
    html = html +'</tr>';
    tabuleiro.append(html);
}


function setPecas() {
    Peao();
    Torre();
    Cavalo();
    Bispo();
    Rei();
    Rainha();
}

function Peao() {
    for (var j=1; j<=8; j++) {
        var vetor =  xadrez["B"];
        vetor[j]=Peao_Preto;
        xadrez["B"]= vetor;
       $("#B"+j).html(Peao_Preto.icon);

    }
    for (var j=1; j<=8; j++) {
     xadrez["G"][j]=Peao_Branco;
      $("#G"+j).html(Peao_Branco.icon);
    }
}
 function Torre() {
     xadrez["A"][1]=Torre_Preto;
     $("#A1").html(Torre_Preto.icon)
     xadrez["A"][8]=Torre_Preto;
     $("#A8").html(Torre_Preto.icon)

     xadrez["H"][1]=Torre_Branco;
     $("#H1").html(Torre_Branco.icon)
     xadrez["H"][8]=Torre_Branco;
     $("#H8").html(Torre_Branco.icon)
 }

 function Cavalo() {
     xadrez["A"][2]=Cavalo_Preto;
     $("#A2").html(Cavalo_Preto.icon)
     xadrez["A"][7]=Cavalo_Preto;
     $("#A7").html(Cavalo_Preto.icon)

     xadrez["H"][2]=Cavalo_Branco;
     $("#H2").html(Cavalo_Branco.icon)
     xadrez["H"][7]=Cavalo_Branco;
     $("#H7").html(Cavalo_Branco.icon)
 }
 function Bispo() {
     xadrez["A"][3]=Bispo_Preto;
     $("#A3").html(Bispo_Preto.icon)
     xadrez["A"][6]=Bispo_Preto;
     $("#A6").html(Bispo_Preto.icon)

     xadrez["H"][3]=Bispo_Branco;
     $("#H3").html(Bispo_Branco.icon)
     xadrez["H"][6]=Bispo_Branco;
     $("#H6").html(Bispo_Branco.icon)
 }
 function Rei() {
     xadrez["A"][5]=Rei_Preto;
     $("#A5").html(Rei_Preto.icon)

     xadrez["H"][5]=Rei_Branco;
     $("#H5").html(Rei_Branco.icon)
 }
 function Rainha() {
     xadrez["A"][4]=Rainha_Preto;
     $("#A4").html(Rainha_Preto.icon)
     xadrez["H"][4]=Rainha_Branco;
     $("#H4").html(Rainha_Branco.icon)
 }
function CaseSelecionada() {
    $('#tabuleiro td').mouseenter(function() {
        $(this).addClass("casa_selecionada");
    }).mouseleave(function () {
        $(this).removeClass("casa_selecionada");
    });
}

function coordenadas(string) {
    var a = string.split("");
    a[a.length-1]= parseInt(a[a.length-1]);
    return a;

}
function Mover() {
    $('#tabuleiro td').click(function() {
       var coord =coordenadas(this.id);

       switch ($(this).html()) {
            case Peao_Preto.icon:
                Peao_Preto.movimento(coord[0],coord[1]);
                break;
            case Peao_Branco.icon:
                Peao_Branco.movimento(coord[0],coord[1]);
                break;
            case Torre_Preto.icon:
                Torre_Preto.movimento(coord[0],coord[1]);
                break;
            case Torre_Branco.icon:
                Torre_Branco.movimento(coord[0],coord[1]);
                break;
            case Cavalo_Preto.icon:
                Cavalo_Preto.movimento(coord[0],coord[1]);
                break;
            case Cavalo_Branco.icon:
                Cavalo_Branco.movimento(coord[0],coord[1]);
                break;
            case Bispo_Preto.icon:
                Bispo_Preto.movimento(coord[0],coord[1]);
                break;
            case Bispo_Branco.icon:
                Bispo_Branco.movimento(coord[0],coord[1]);
                break;
            case Rei_Branco.icon:
                Rei_Branco.movimento(coord[0],coord[1]);
                break;
            case Rei_Preto.icon:
                Rei_Preto.movimento(coord[0],coord[1]);
                break;
            case Rainha_Preto.icon:
                Rainha_Preto.movimento(coord[0],coord[1]);
                break;
            case Rainha_Branco.icon:
                Rainha_Branco.movimento(coord[0],coord[1]);
            default:
                alert("Escolha uma peça para jogar!");
                break;
        }


    });
}

function Tabuleiro() {

    var tabuleiro = $("#tabuleiro");
    Numeros(tabuleiro);
    var i=1;
    for(var letter=65;letter<73;letter++)
    {
        var  char = String.fromCharCode(letter);
        tabuleiro.append('<tr id='+char+'></tr>');
        $("#"+char).append('<td>'+char+'</td>');
        for (var j=1; j<=8; j++){
            var classe = (i%2==0?(j%2==0?"casa_branca":"casa_cinza"):(j%2!=0?"casa_branca":"casa_cinza"));
            $("#"+char).append('<td id='+char+j+' class='+classe+'></td>');

        }
        i++;
    }

    setPecas();
    CaseSelecionada();
    Mover();
}