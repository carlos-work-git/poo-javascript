/**
 * Criar o inimigo do Naruto, o mesmo tem as propriedades vivo (boolean) e nome.
 * O método atirar shuriken do exercício passado deve matar o inimigo.
 * Sendo acertado pela shuriken, a propriedade vivo para para morto (false).
 */

 //console.log("teste");
   
function Inimigo(nome) {
     this.nome = nome; 
     this.vivo = true;

     this.ultimaPalavra = () => console.log(`(${this.nome}) - Eu me vingarei!!!`);

   }


function Ninja(nome, idade, estilo, nomeProjetil, quantidadeProjeteis) {
     this.nome = nome; 
     this.idade = idade;
     this.estilo = estilo;
     this.nomeProjetil = nomeProjetil;
     this.quantidadeProjeteis = quantidadeProjeteis;

     this.golpeFinal = function(){
        console.log(`(${this.nome}) - Esse é meu jutsu Secreto, toma!`);
     }

     this.getQuantidadeProjeteis = function  () {
       // console.log(`${this.nome} tem ${quantidadeProjeteis} ${nomeProjetil}(s)`); 
       // console.log(Number(this.quantidadeProjeteis));
        return this.quantidadeProjeteis;
     };

     this.recarregarProjeteis = function (quantidadeProjeteis){
        this.quantidadeProjeteis = this.quantidadeProjeteis + quantidadeProjeteis;
     }
     
     this.atirarProjetil = function (Inimigo) {

        if(this.quantidadeProjeteis!=0){
            console.log(`(${this.nome})- Toma essa ${this.nomeProjetil} !!!`);
            this.quantidadeProjeteis--;
            this.getQuantidadeProjeteis();

            danzo.vivo=false;
            //console.log(danzo);
            
            if(danzo.vivo===false){
                danzo.ultimaPalavra();
            };

        }else{
            console.log(`Os projeteis de ${this.nome} acabaram!!!`);
            return 0;
        }
        


     };

     this.rendicao = function (){
         return console.log(`(${this.nome}) - Eu me rendo!`);
     };

     this.vitoria = function () {
         console.log(`(${this.nome}) - Esse é meu estilo ninja de ser!!! Ha hasuhauhsuhuahssa`);
         console.log("");
         return console.log("¡¡¡ " + this.nome + " - Ganhou a Luta !!!");
    };

   };

   let danzo = new Inimigo("Danzo")
   let naruto= new Ninja("Naruto Uzumaki", 14, "Ninjutsu", "Shuriken",3);
   let kakashi= new Ninja("Kakashi", 30, "Ninjutsu", "kunai",2);

   console.log(naruto);
   console.log(danzo);
   console.log("");

   naruto.atirarProjetil(danzo);
   console.log("");
   console.log(danzo);