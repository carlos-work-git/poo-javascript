/**
 * Crie dois objetos que compartilhem nomes de propriedades via object literals;
 * Uma variável deve definir a parte que se repete nas propriedades dos objetos.
 */

 //console.log("teste");

 let n = 'numero_de_';

 let arvore = {
    [n+"frutos"]:10,
 };

 let carro = {
    [n+"portas"]:4,
 };

 let pessoa = {
    [n+"pernas"]:2,
 };

console.log(arvore);
console.log(carro);
console.log(pessoa);







