function identity<T>(arg:T): T {
    console.log(typeof arg)
    return arg;
}

//identity("string");
//identity(5);
//identity(true);

console.log()

console.log(identity('string'));
console.log(identity(5));
console.log(identity(true));