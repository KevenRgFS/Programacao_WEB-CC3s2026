//criar os preços do combustível
const precoGasolina = 6.69;
const precoEtanol = 4.30;
const precoDiesel = 6.03;

//------------------------------------------------------------------------------------------------------------------------

const atualizarValor = () =>{
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);

        const precos = {
            "gasolina": precoGasolina,
            "etanol": precoEtanol,
            "diesel": precoDiesel,
            "": null
        };

    let precoPorLitro = precos[tipo];

        if(!precoPorLitro){
            document.getElementById("resultado").textContent = "Para calcular, necessário informar o combustível!";
            return;
        }
    console.log(precoPorLitro);

    let litros = parseFloat(document.getElementById("litros").value);
    calcularValorAbastecimento(precoPorLitro, litros);
};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

//------------------------------------------------------------------------------------------------------------------------

const calcularValorAbastecimento = (precoCombustivel, litros) => {

        if(litros<=0 || isNaN(litros)){
            document.getElementById("resultado").textContent = "Valores vazios ou iguais/menores que zero não são válidos";
            return;
        }
        
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
};

//------------------------------------------------------------------------------------------------------------------------

const formatarMoeda = (valor) => {
    return "R$ " + valor.toLocaleString("pt-br", 
        {minimumFractionDigits: 2, maximumFractionDigits:2}
    );
};

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

//------------------------------------------------------------------------------------------------------------------------

litros.addEventListener ("keydown", (event) => {
    if(event.key == "Enter"){
        event.preventDefault();
        atualizarValor();
    };
});