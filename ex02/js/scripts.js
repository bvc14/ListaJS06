

document.getElementById("votosCand1").innerHTML=0;
document.getElementById("votosCand2").innerHTML=0;
document.getElementById("votosCand3").innerHTML=0;
document.getElementById("votosCand4").innerHTML=0;

vetorVotos = [0,0,0,0];

fotoCand1 = document.getElementById("fotoCand1");
fotoCand2 = document.getElementById("fotoCand2");
fotoCand3 = document.getElementById("fotoCand3");
fotoCand4 = document.getElementById("fotoCand4");



fotoCand1.addEventListener("click", function(){addVotoCand(1)});
fotoCand2.addEventListener("click", function(){addVotoCand(2)});
fotoCand3.addEventListener("click", function(){addVotoCand(3)});
fotoCand4.addEventListener("click", function(){addVotoCand(4)});

function addVotoCand(nroCand){
    document.getElementById(`votosCand${nroCand}`).innerHTML = ++vetorVotos[nroCand - 1];
}
