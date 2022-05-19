function Ninja(nome,arma){

    this.nome=nome;
    this.arma=arma;

}

const naruto = new Ninja("Naruto","shuriken");
const rocklee = new Ninja("Rock Lee","punhos");

console.log(naruto===rocklee);

