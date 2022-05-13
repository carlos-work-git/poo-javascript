
function criarArvore(especie, temFruto){
    return{
        especie:especie,
        temFruto:temFruto,
    };
};

let laranjeira = criarArvore("Laranjeira", true);

function Heroi(nome,classe){
    this.nome=nome;
    this.classe=classe;
};

let jaspion = new Heroi("Jaspion", "robô");

console.log(jaspion);
console.log(jaspion.constructor);

let obj = {
    tete: "teste",
};

console.log(laranjeira instanceof criarArvore);
console.log(jaspion instanceof Heroi);
console.log(obj instanceof oject);
console.log(laranjeira instanceof criarArvore);
