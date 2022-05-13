let teste = {
    a:1,
};

let teste2 = {
    a:2,
};

console.log(Object.is(teste,teste2));

console.log(Object.is(NaN, NaN));
console.log(NaN===NaN); // false

console.log(Object.is(+0, -0));
console.log(+0 === -0); //true

let teste3 = teste;

console.log(Object.is(teste,teste3)); // true



