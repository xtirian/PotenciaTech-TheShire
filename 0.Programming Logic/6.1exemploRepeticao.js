//Quero adicionar o dinheiro em uma conta e saber quanto tempo demorará para ter certa quantidade


//Esta conta rende 10% ao ano
// Todo mês eu vou depositar um valor nesta conta
// Quantos meses demorar para chegar a R$ 100.000,00

const deposito = 500;
const objetivo = 100000;
const rendimentoAnual = 0.10;

let conta = 0;
let resposta =0;


while(conta < objetivo){
  conta += deposito;
  conta += (conta*rendimentoAnual)/12
  
  resposta += 1
  
}

console.log("Demorou ",resposta,"meses.")
console.log("Ou demorou ",((resposta/12).toFixed(0)),"anos.")