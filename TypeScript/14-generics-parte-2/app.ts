function identity<T>(arg:T): T {
    console.log(typeof arg)
    return arg;
}

//identity("string");
//identity(5);
//identity(true);

console.log()

console.log(identity<string>('texto'));
console.log(identity<number>(5));
console.log(identity<boolean>(true));