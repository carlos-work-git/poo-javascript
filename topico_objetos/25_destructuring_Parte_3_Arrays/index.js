let carro = {
    portas:4,
    aro:20,
    tetoSolar:true,
    banco:'couro',
};

//Nesta forma de destructuring é obrigatório a declaração
//de uma variável de mesmo nome do atributo
let portas=0;

console.log(portas);

({portas}=carro);

console.log(portas);

