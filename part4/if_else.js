//compare two numbers using if else.
let num1 = 2
let num2 = 5
if(num1>num2){
    console.log("num1 is greater than num2")
}
else{   
    console.log("num2 is greater than num1")
}
//output: num2 is greater than num1

//compare two strings using if else.
let username = "shivam"
let anotheruser = "shivam"
if(username==anotheruser){
    console.log("username is same")
}
else{
    console.log("username is different")
}

//if a number is variable or not using if else
let num = 5
if (typeof (num) == "number") {
    console.log("num is a number")
}
else {
    console.log("num is not a number")
}

//if a string is variable or not using if else
let name = "shivam"
if (typeof (name) == "string") {
    console.log("name is a string")
}
else {
    console.log("name is not a string")
}

//if a boolean is variable or not using if else
let isloggedin = true
if (typeof (isloggedin) == "boolean") {
    console.log("isloggedin is a boolean")
}
else {
    console.log("isloggedin is not a boolean")
}
//checking the length of array.
let heroes = ['superman', 'batman', 'spiderman', 'thor']
let x = heroes.length
if(x>4){
    console.log("array is greater than 4")
}
else{
    console.log("array is less than 4")
}