boy = document.getElementById("personagem");
paragrafo = document.getElementById("mensagem");

trocarPersonagem('pensativo', 'zzzzzzzzz!');


boy.addEventListener("mouseover", function () { trocarPersonagem('assustado', 'O que você quer?')});

boy.addEventListener("mouseout", function () { trocarPersonagem('pensativo', 'zzzzzzzzz!') });

boy.addEventListener("click",  pedirNome);


function trocarPersonagem(tipo, msg) {
    boy.src = `img/${tipo}.png`;
    paragrafo.innerHTML = msg;
    boy.classList.add(null);
    boy.classList.remove("alegre", "nervoso");
}

function pedirNome(){
    nome = prompt("Qual é o seu nome?");
    if(!nome){
        trocarPersonagem('nervoso', 'Não me faça perder tempo!')
        boy.classList.add("nervoso");
        boy.classList.remove("alegre");
    } else{
        trocarPersonagem('alegre', `${nome} seja bem-vindo!`)
        boy.classList.add("alegre");
        boy.classList.remove("nervoso");
    }
}