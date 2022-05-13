/**
 * No objeto ninja crie a propriedade shuriken, com uma quantidade de estrelas ninjas;
 * A cada método do "atirarProjetil" subtraia uma shuriken.
 * Caso os projeteis tenham acabado, o ninja não poderá atirar mais projeteis.
 */

 console.log("teste");

 function Ninja(nome, idade, estilo, nomeProjetil, quantidadeProjeteis) {
     this.nome = nome; 
     this.idade = idade;
     this.estilo = estilo;
     this.nomeProjetil = nomeProjetil;
     this.quantidadeProjeteis = quantidadeProjeteis;
     
     this.atirarProjetil = function () {
        if(quantidadeProjeteis>=0){
            console.log(`(${this.nome})- Uma ${this.nomeProjetil} foi atirada!!!`);
            quantidadeProjeteis--;
            console.log(`${this.nome} tem ${quantidadeProjeteis} ${nomeProjetil}(s)`);
        }else{
            console.log(`Os projeteis de ${this.nome} acabaram!!!`);
        }            
     };
   };
 
   let naruto= new Ninja("Naruto Uzumaki", 14, "Ninjutsu", "Shuriken",6);
 
   let kakashi= new Ninja("Kakashi", 30, "Ninjutsu", "kunai",4);
 
   console.log(naruto);
   console.log(kakashi);
 
   //Fight
 
   for(i=0;i<10;i++){
 
    while(naruto.quantidadeProjeteis > 0 || kakashi.quantidadeProjeteis > 0)
    
    console.log("");
    naruto.atirarProjetil();
    console.log("");
    kakashi.atirarProjetil();

   }
