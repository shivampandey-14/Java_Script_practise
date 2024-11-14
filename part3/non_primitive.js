let obejct = {
    firstname: "Shivam",
    isloggedin: true,
    age: 21,
}
console.log(obejct)
console.log(typeof obejct)

//important point .
// const name = "shivam"
// name="kumar" //error because we can't change the value of const variable
// console.log(name)


const object1 = {
    firstname:"shivam",
    lastname:"pandey",
}
object1.firstname = "shreya" //this is valid as we are changing the value in the reserved space only.
object1.age = 15 //this is also valid as we are adding new key value pair in the reserved space only.
object1['father name']="Amitabh" //this is also valid as we are adding types which have space in it.
console.log(object1)

