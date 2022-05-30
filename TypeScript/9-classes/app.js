var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Humano.prototype.apresentarHumano = function () {
        return "O nome deste Humano \u00E9 ".concat(this.nome, " e ele tem ").concat(this.idade, " anos");
    };
    return Humano;
}());
var jose = new Humano("José", 34);
console.log(jose);
console.log(jose.apresentarHumano());
