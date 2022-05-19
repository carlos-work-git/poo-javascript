function criarArvore(especie, temFruto){
    return{
        especie:especie,
        temFruto:temFruto,
    };
};

let laranjeira = criarArvore("Laranjeira", true);

console.log(laranjeira);



