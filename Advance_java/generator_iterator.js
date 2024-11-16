function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

let gen2 = numberGenerator();
console.log(gen2.next().value)   //output:1
console.log(gen2.next().value)  //output:2
console.log(gen2.next().value)  //output:3
console.log(gen2.next().value) //Output: undefined