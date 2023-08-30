const lista = [0,1,2,3,4,5,6,7,8,9,"e","i","r","y","z"];

console.log(lista);

for (const elemento of lista) {
  console.log(elemento)
  console.log(typeof(elemento))
  
  if (isNaN(elemento) === false){
  console.log(elemento)}
}