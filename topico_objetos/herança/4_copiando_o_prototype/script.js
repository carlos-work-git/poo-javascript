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
Carro.prototype = Veiculo.prototype; //Copiando o prototype de veículo para carro

let trembala = new Trem('Trem Bala');

console.log(trembala.tipo);
trembala.ligar();

let ferrari = new Carro();
ferrari.ligar();

let trem = new Trem('Trem');
trem.ligar();

console.log(trem.carenagem);

console.log(trembala instanceof Trem); //True
console.log(ferrari instanceof Carro); //True

console.log(trembala instanceof Veiculo); //True
console.log(ferrari instanceof Veiculo);  //True

console.log(trembala instanceof Object); //True
console.log(ferrari instanceof Object);  //True