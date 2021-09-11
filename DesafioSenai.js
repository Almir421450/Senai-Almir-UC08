
//Função Capacidade da Caixa !!!
function capacidadeCaixa(quantidade) {
    if(quantidade <= 10){
        return console.log("Proximo item");
    } else{
        return console.log("Capacidade esgotada");
    } 
} 

let quantidade = 10
let resultCaixa = capacidadeCaixa();

// função peso da peça !!
function pesoDaPeca(peso) {
    if(peso <= 100){
        return console.log("Peso não permitido");
    }else {
        return console.log("Peso Permitido");
    }
}

let peso = 101;
let resultPeso = pesoDaPeca();


// função quantidade de letras nome !!
let inputNome = function () {
    const qtdLetras = 3;
    if (qtdLetras < nomeDaPeca.length) {
      return console.log(`Nome ${nomeDaPeca}`);
    } else {
      return console.log("Error name !");
    }
  };
  
  let nomeDaPeca = "Tur"; // Entrada do input
  let resultName = inputNome(); // Saída da funcao.
