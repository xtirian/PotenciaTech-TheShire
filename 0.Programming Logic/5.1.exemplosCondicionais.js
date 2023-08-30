let produto1 = 19.29;
let produto2 = 2.80;
let produto3 = 4.25;

let saldo = 0;

if (produto1 <= 18 ){
  console.log("comprei o produto 1");
  saldo += produto1
}

if (produto2 >= 1.50 && produto2 <= 3){
  console.log("comprei o produto 2");
  saldo += produto2
} else{
  console.log("Tem algo errado com o produto 2")
}

console.log("Comprei o produto 3")
saldo += produto3

console.log("O valor a ser pago é R$",saldo)