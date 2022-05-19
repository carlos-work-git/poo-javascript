function Veiculo(){
    this.carenagem = 'aço';
    this.ligar = function(){
        console.log("O veículo ligou!");
    }
}

function Trem(tipo){
    this.tipo=tipo;
    this.vagoes=50;
}

function Carro() {
    this.pneus = 4;
}

Trem.prototype = new Veiculo(); //Trem Herdando de Veículo
Carro.prototype = new Veiculo(); //Carro Herdando de Ve

let trembala = new Trem('Trem Bala');

console.log(trembala.tipo);
trembala.ligar();

let ferrari = new Carro();
ferrari.ligar();

console.log(trembala instanceof Trem); //True
console.log(ferrari instanceof Carro); //True

console.log(trembala instanceof Veiculo); //True
console.log(ferrari instanceof Veiculo);  //True

