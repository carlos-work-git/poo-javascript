// "Interface" e "Sobreescrita"

function Veiculo(){}

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function(){
    console.log("O veículo ligou!");
}

function Trem(tipo){
    this.tipo=tipo;
}

Trem.prototype.vagoes=50;

function Carro() {}

Carro.prototype.pneus = 4;

Trem.prototype = Veiculo.prototype; //Copiando o prototype de veículo para trem
//Carro.prototype = Veiculo.prototype; //Copiando o prototype de veículo para carro

//Construtor Temporário
let F = function(){};
F.prototype = Veiculo.prototype;
Carro.prototype = new F(); // HERDANDO DO CONSTRUTOR TEMPORÁRIO

let trembala = new Trem('Trem Bala');

console.log(trembala.tipo);
trembala.ligar();

let ferrari = new Carro(); // FERRARI HERANDO DE CARRO QUE HERDA DO CONSTRUTOR TEMPORÁRIO
ferrari.ligar();

let trem = new Trem('Trem');
trem.ligar();

console.log(trem.carenagem);

Carro.prototype.ligar = function(){ //Sobreescrevendo o método ligar() APENAS DO CONSTRUTOR TEMPORÁRIO
    console.log("O carro ligou");
}

//Nota-se agora que o método ligar foi sobreescrito apenas para quem herda de carro
ferrari.ligar();
trem.ligar();
trembala.ligar();

console.log(trembala instanceof Trem); //True
console.log(ferrari instanceof Carro); //True

console.log(trembala instanceof Veiculo); //True
console.log(ferrari instanceof Veiculo);  //True

console.log(trembala instanceof Object); //True
console.log(ferrari instanceof Object);  //True