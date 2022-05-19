function criarCarro(modelo,portas, aro, tetoSolar){
    return{
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,

        ligaCarro: function(){
            console.log("Ligou");
        },

        temTetoSolar: function(){
            if(this.tetoSolar==true){
                console.log("Tem teto solar");
            } else {
                console.log("Não tem teto solar");
            }
        },
    };
};

let ferrari=criarCarro('Ferrari', 4, 18, true);

console.log(ferrari.modeloDoCarro);
ferrari.ligaCarro();
ferrari.temTetoSolar();




