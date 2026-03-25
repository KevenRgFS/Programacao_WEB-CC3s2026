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

//----------------------------------------------------------------------------------------------------
//Texto Dinâmico e contador

let texto = document.getElementById("texto");
let expor = document.getElementById("add");
let contador = 0;
let contadorfixo = 0;
let valorContagem = document.getElementById("contagem");
let contagemFixa = document.getElementById("contagemFixa");

texto.addEventListener("keydown", function(event){

    if(texto.value.toLowerCase() == "limpar"){
        expor.innerHTML = "";
        texto.value = "";
    }
    if(event.key == "Enter"){
        expor.innerHTML += texto.value + "<br>";
        texto.value = "";                  
    } 
})

texto.addEventListener("keydown", function(event){

    if(event.key == " " || event.key == "Shift" || event.key == "Control" || event.key == "Alt" || event.key == "Tab" || event.key == "CapsLock"){
        return;
    } 
    else if(event.key == "Enter"){
        contador = 0;
        valorContagem.innerHTML = "Contagem Atual: 0";
    }
    else if(event.key == "Backspace"){
        contador--;
        valorContagem.innerHTML = "Contagem Atual: " + contador;
        if(contador < 0){
            contador = 0;
            valorContagem.innerHTML = "Contagem Atual: " + contador;
        }
    }
    else{
        contador++;
        contadorfixo++;
        valorContagem.innerHTML = "Contagem Atual: " + contador;
        contagemFixa.innerHTML = "Contagem Fixa: " + contadorfixo;

    }
})

//----------------------------------------------------------------------------------------------------
//Lista Ordenada e Lista não Ordenada:

    let botao3 = document.getElementById("addLista");
    let escolha = document.getElementById("listaTipo")
    let listaResultado = document.getElementById("listaResultado");

    botao3.onclick = function(){

        listaResultado.innerHTML = "";

        let lista;

        if(escolha.value == "naoOrdenada"){
            lista = document.createElement("ul");
        }
        else{
            lista = document.createElement("ol");
        }

        for(let i=0; i<3; i++){
            let item = document.createElement("li");
            item.innerHTML = "Item " + (i+1);
            lista.appendChild(item);
        }

        listaResultado.appendChild(lista);
    }
    
//----------------------------------------------------------------------------------------------------
//Limpar todo o site

let botaoX = document.getElementById("atomico");

botaoX.onclick = function(){
    resultado.innerHTML = "0";
    expor.innerHTML = "";
    valorContagem.innerHTML = "Contagem Atual: 0";
    contagemFixa.innerHTML = "Contagem Fixa: 0";
    texto.value = "";   
    listaResultado.innerHTML = "";
}