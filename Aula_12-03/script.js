//buscar o elemento via javascript

let meuElemento = document.getElementById("paragrafo"); //id
console.log(meuElemento);
console.log(meuElemento.textContent); //pega o conteúdo da tag

//buscaro elemento HTML pela classe

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for(let i=0; i<paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}

//buscar o elemento pela tag

let paragrafo2 = document.getElementsByTagName('p');
console.log(paragrafo2);

//criar o elemento HTML

let destino = document.getElementById("elemento"); //buscando o elemento
let p = document.createElement("p"); //cria o elemento HTML
p.textContent= "Paragrafo criado via Javascript";
destino.append(p); //adiciona ao DOM