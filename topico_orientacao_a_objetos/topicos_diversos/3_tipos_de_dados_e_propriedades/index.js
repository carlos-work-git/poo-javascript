let maquina = {
    material:"Aço inox",
    equipamentos: ['motor','freio','esteira','cilindro'],
    vaiMontada: false,
    numeroDeMotores: 1,
};

console.log(maquina);
console.log('');

console.log("Material: "+maquina.material);
console.log('');

console.log(maquina);
console.log('');

console.log("Equipamentos: " + maquina.equipamentos[2]);
console.log('');

console.log("Equipamentos:");
for(let i=0; i<maquina.equipamentos.length;i++){
    console.log('['+i+']'+maquina.equipamentos[i])
}

console.log('');
if(maquina.vaiMontada == false){
    console.log("O comprador precisa montar a máquina");
}
