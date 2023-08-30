//Quantos numeros de 1 a 1.000 ou 10.000.000 são divisíveis por 17

//contador é obrigatório
let contador = 1;
let qntMultiplos = 0;

while(contador <= 1000 ){
  
  if(contador%17 === 0){
    qntMultiplos += 1
  }
  
  contador++
}

console.log(qntMultiplos)