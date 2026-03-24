//Contador

let botao1 = document.getElementById("botao1");
let resultado = document.getElementById("valor");
let contagem = 0; 

let botao2 = document.getElementById("botao2");

botao1.onclick = function(){

    contagem++;
    resultado.innerHTML = contagem;
    
}

botao2.onclick = function(){

    if(contagem <= 0){
        alert("Seu valor já é 0, não é possível diminuir mais!");
        return;
    }
    else{
        contagem--;
        resultado.innerHTML = contagem;
    }
}

//Texto Dinâmico

let texto = document.getElementById("texto");
let expor = document.getElementById("add");

texto.onkeydown = function(event){

    if(texto.value.toLowerCase() == "limpar"){
        expor.innerHTML = "";
        texto.value = "";
    }
    if(event.key == "Enter"){
        expor.innerHTML += texto.value + "<br>";
        texto.value = "";
    } 
}