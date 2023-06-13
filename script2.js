var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];

var vez = 1;

var contaclique = 0;

var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta="";


function verifica(casa) {
    if(casas[casa]==9){
        casas[casa]=vez;
        if(vez==1) {
            document.getElementById("img"+casa).src="./img/HARRY (1).png"
        }else{
            document.getElementById("img"+casa).src="./img/RONY (1).png"
        }

        vez*=-1;
        contaclique++;
        confere();
    }
}



function confere(){
    var i;
    var lGanhou = false;
    var lAcabou = true;

    for(i=0; i<casas.length;i++) {
        if(casas[i]==9) {
            lAcabou=false;
        }
    }

    if(contaclique==9) {
        lAcabou=true;
    }

    var soma = [];
    soma[0]=casas[0]+casas[1]+casas[2];
    soma[1]=casas[3]+casas[4]+casas[5];
    soma[2]=casas[6]+casas[7]+casas[8];
    soma[3]=casas[0]+casas[3]+casas[6];
    soma[4]=casas[1]+casas[4]+casas[7];
    soma[5]=casas[2]+casas[5]+casas[8];
    soma[6]=casas[0]+casas[4]+casas[8];
    soma[7]=casas[2]+casas[4]+casas[6];

    for(i=0;i<soma.length;i++) {

        if(soma[i]==-3) {
            lGanhou = true;
            sResposta="Rony Ganhouu!!!";
            iPontosO++;
            document.getElementById("MICKEY").innerHTML="Pontos Rony: "+ iPontosO;
            break;
        }else if(soma[i]==3) {
            lGanhou = true;
            sResposta="Harry Ganhouu!!!";
            iPontosX++;
            document.getElementById("MINNIE").innerHTML="Pontos Harry: "+iPontosX;
            break;
        }
    }

    if(lGanhou==false && lAcabou==true) {
        sResposta="Deu Velha!!!";
        iPontosV++;
        document.getElementById("velha").innerHTML="Velha...: "+iPontosV;

    }

    if(lGanhou || lAcabou) {

        for(i=0;i<casas.length;i++) {
            document.getElementById("casa"+i).disable=true;
            casas[i] = 0;
        }

        document.getElementById("resposta").innerHTML = sResposta;
        document.getElementById("resposta").style.color="#ffc400";
        document.getElementById("resposta").style.fontSize="xx-large";
    }
}

function recomeca() {
    for(i=0;i<casas.length;i++) {
        document.getElementById("img"+i).ondragstart = function() { return false; };
        document.getElementById("casa"+i).disable=false;
        document.getElementById("img"+i).src="";

        document.getElementById("resposta").innerHTML = "RESULTADO: ";
        document.getElementById("resposta").style.color="#f5ff00 ";
        document.getElementById("resposta").style.fontSize="large";

        casas[i]=9;
        lGanhou = false;
        lAcabou = true;
        contaclique = 0;
        vez = 1;
    }
}

