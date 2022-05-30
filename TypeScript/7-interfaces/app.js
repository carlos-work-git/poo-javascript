function imprimirDados(obj) {
    console.log("Esta pessoa se chama ".concat(obj.nome, " e tem ").concat(obj.idade, " anos"));
}
var pessoa1 = { nome: 'Matheus', idade: 29 };
imprimirDados(pessoa1);
var pessoa2 = { nome: 'José', idade: 34 };
imprimirDados(pessoa2);
