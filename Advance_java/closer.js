function outer()
{
    let count = 4;
    return function inner() {
        return count++;
    }
}
let incerement = outer();
console.log(incerement());
console.log(incerement());
