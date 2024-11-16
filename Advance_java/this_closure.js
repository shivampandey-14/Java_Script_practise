const person={
    name: "Shivam",
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
person.greet(); //Output: Hello Shivam

// const friend = person.greet() //Output: Hello undefined because this is not pointing to the object person to point it we need to point it to the object.
//To point it to the object we can use bind method.
const friend = person.greet.bind({ name: "Samarth" })
friend(); //Output: Hello Samarth