const palavra = "pindamonhangaba";

let numDeVogais = 0

for (const letra of palavra) {
  
  if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    numDeVogais += 1
    console.log(letra)
  }
  
  
}

console.log("Na palavra",palavra,"há",numDeVogais,"vogais")