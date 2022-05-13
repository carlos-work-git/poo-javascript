/**
 * Crie um objetoNinja, por constructor function;
 * Com a propriedade de nome ninja e o método atirarShuriken;
 */

console.log("teste");

function Ninja(nome, idade, estilo, projetil) {
    this.nome = nome; 
    this.idade = idade;
    this.estilo = estilo;
    this.projetil = projetil;
    
    this.atirarProjetil = function () {
      console.log(`(${this.nome})- Uma ${this.projetil} foi atirada!!!`)
    };
  };

  let naruto= new Ninja("Naruto Uzumaki", 14, "Ninjutsu", "Shuriken");

  let kakashi= new Ninja("Kakashi", 30, "Ninjutsu", "kunai");

  console.log(naruto);
  console.log(kakashi);

  console.log("");
  naruto.atirarProjetil();
  console.log("");
  kakashi.atirarProjetil();

