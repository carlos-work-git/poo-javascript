/*
    Crie um objeto com 3 propriedades;
    A primeira deve ser uma string, a segunda um number e a terceira um boolean
*/

let clinica = {

    cnpj: 123456789+"/"+0001,
    filiais: 3,
    lista_pacientes:[{"nome":"João", "idade":33},{"nome":"Astolfo", "idade":60}],
    lista_medicos:[{"nome":"Ronaldo", "idade":55},{"nome":"Romario", "idade":60}],
    consultas:["28/05/2022", "05/06/2022"],

};


console.log(clinica);

console.log("CNPJ: "+clinica.cnpj);
console.log("Numero de Filiais: "+clinica.filiais);
console.log("Lista de Pacientes: "+clinica.lista_pacientes);
console.log("Lista de Médicos: "+clinica.lista_medicos);
console.log("Consultas Agendadas: "+clinica.consultas);

