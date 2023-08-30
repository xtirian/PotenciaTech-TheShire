let precoProduto1 = 37.5;
precoProduto1.toFixed(2)

console.log("Preço do Produto 1: R$",precoProduto1);

//aumentou 1 real

//precoProduto1 = 38.5

//console.log("Preço do Produto 1: R$",precoProduto1);


// aqui usamos uma expressão aritmetica para aumentar em 1 real

precoProduto1 = precoProduto1 + 1

console.log("Preço do Produto 1: R$",precoProduto1);

//Outra forma de fazer é usando o operador +=

precoProduto1 += 1

console.log("Preço do Produto 1: R$",precoProduto1);
// agora o valor é 39

//dei um desconto de 20%

let novoPreco = precoProduto1 * 0.8
console.log("Preço do Produto 1: R$",novoPreco);

//ou ao inves de multiplicar por 0.8 eu posso tirar 20% do Produto

//defino o valor do desconto
let desconto = precoProduto1 * 0.20
//tiro do produto o valor do desconto
precoProduto1 -= desconto


console.log("Preço do Produto 1: R$",precoProduto1);
