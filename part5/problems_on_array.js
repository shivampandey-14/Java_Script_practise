/* Declare an array  named 'teaFlavours with 3 strings named
"ginger tea", "cardamom tea", "masala tea" 
Acess the first element of the array and store it in variable named
'firstTea'.
*/

    let teaFlavours = ["ginger tea", "cardamom tea", "masala tea"]
    let firstTea = teaFlavours[0]
    console.log(firstTea)


/*Declare anarray named 'teaFlavours with 3 strings named
"ginger tea", "cardamom tea", "masala tea"
Change the second element of the array 
and set its value to "green tea"
*/

    let teaFlavours1 = ["ginger tea", "cardamom tea", "masala tea"]
    teaFlavours1[1] = "green tea"
    console.log(teaFlavours1)


/*Declare an array named 'teaFlavours with 3 strings named
"ginger tea", "cardamom tea", "masala tea"
Add a new element to the array and set its value to "lemon tea"
*/
    let teaFlavours2 = ["ginger tea", "cardamom tea", "masala tea"]

    //1st method
    // teaFlavours2[3] = "lemon tea" //this is also valid as we are adding new key value pair in the reserved space only.
    // console.log(teaFlavours2)

    //2nd method
    // teaFlavours2[teaFlavours2.length] = "lemon tea"
    // console.log(teaFlavours2)

    //3rd method best method to use
    teaFlavours2.push("lemon tea")
    console.log(teaFlavours2)

/* remove the last element from teaflavours2 array*/
    
    let flavour=teaFlavours2.pop() //return the removed element and remove the last element from the array.
    console.log(teaFlavours2)
    console.log(flavour)
        
// create soft copy of teaFlavours2 array named softCopyTeas
    let softteaFlavours2 = teaFlavours2;//both of them points to the same memory loacation so if we change one then other will also change.
    console.log(softteaFlavours2)

// create hard copy of teaFlavours2 array named hardteaFlavours2
    //method 1 using slice
    // let hardteaFlavours2 = teaFlavours2.slice() //it will create a new memory location for the hardteaFlavours2 array.
    // console.log(hardteaFlavours2)
    
    //method 2 using spread operator
    let hardteaFlavours2 = [...teaFlavours2] //it will create a new memory location for the hardteaFlavours2 array 
    // we can add other elements in hard copy as hardteaFlavours[...teaFlavours, "ollon tea"] .
    console.log(hardteaFlavours2)

//create a new array with the element of teaFlavours and teaFlavours2.
    let newteaFlavours = teaFlavours.concat(teaFlavours2)
    console.log(newteaFlavours)
    
    
//find the length of newteaFlavours
console.log(newteaFlavours.length)
    
//find if a element is present or not in the array
    console.log(newteaFlavours.includes("ginger tea")) //return true

//find the index of a element in the array
    console.log(newteaFlavours.indexOf("ginger tea")) //return 0
