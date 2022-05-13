let carro = {
    portas:4,
    cor: "Vermelha"
}

console.log(carro.portas);
console.log(carro["portas"]);
console.log(carro.cor);

let nporta=carro['porta'];
console.log(nporta);

var mnporta = carro.porta;
console.log(mnporta);



let pessoa = {
    nome: "Matheus"
}
let nomePessoa=pessoa['nome'];
console.log(nomePessoa.length);

let momePessoa=pessoa.nome;
console.log(momePessoa.length);
