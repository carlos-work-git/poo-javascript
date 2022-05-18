/**
 * Crie um objeto que tenha características de um caminhão e coloque em propriedades distintas;
 * Com destructuring coloque essas propriedades em variáveis separadas;
 */

console.log("teste");
console.log(new Date());

function Caminhao (portas,rodas,capacidadeCarga){

   this.portas = portas;
   this.rodas = rodas;
   this.capacidadeCarga = capacidadeCarga;

};

const scania = new Caminhao(2,18,"20T");

console.log(scania);

const {portas, rodas, capacidadeCarga} = scania; // array passado por chaves ao invés de colchetes

console.log(portas);
console.log(rodas);
console.log(capacidadeCarga);

