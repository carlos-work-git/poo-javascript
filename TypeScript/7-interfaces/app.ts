function imprimirDados(obj: {nome:string, idade: number}) {
    console.log(`Esta pessoa se chama ${obj.nome} e tem ${obj.idade} anos`);
}

let pessoa1 = {nome:'Matheus', idade: 29};
imprimirDados(pessoa1);

let pessoa2 = {nome:'José', idade: 34};
imprimirDados(pessoa2);
