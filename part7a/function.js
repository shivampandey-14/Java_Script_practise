/* Write a function names 'makeTea' that takes in a string as an argument and returns a string 
that says "Making tea for <name>" where <name> is the argument passed to the function. */
    function makeTea(name) {
        return `Making tea for ${name}`;
    }
    let name_of_customer = makeTea("John");
    console.log(name_of_customer); // Making tea for John


//create a function named `orderTea` that takes one parameter `teatype. Inside this function create
//another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
//Call `confirmOrder` from within `orderTea` and return the result.
    function orderTea(teatype)
    {
        function confirmOrder() {
            return `Order confirmed for ${teatype}`;
        }
        return confirmOrder();
    }
    let order = orderTea("chai");
    console.log(order); // Order confirmed for chai

//Write an arrow function named `calculatedTotal` that takes two parameter:
// `price` and `quantity`. The function should return the total price of the items by multiplying the `price` and `quantity`.
//Store the result in a variable named `totalCost`.

    const calculatedTotal = (price, quantity) => price * quantity;
    let totalCost = calculatedTotal(10, 5);
    console.log(totalCost); // 50

//Write a function named `processTeaOrder` that takes another function
//`makeTea`,as a parameter and call it with the argument`"eaarl grey"`.
//Return the result of calling `makeTea`.

    function makeTea(typeofTea) {
        return `makeTea : ${typeofTea}`;
    }
    function processTeaOrder(teaFunction) {
        return teaFunction("earl grey");
    }
    let tea = processTeaOrder(makeTea);
    console.log(tea); // makeTea : earl grey

//write a function named `createTeaMaker` that return another function.
//The returned function should take one parameter `teaType` and return a string that says "Making green tea".
//Store the returned function in a variable named `teaMaker`and call it with `"green tea"`.

    function createTeaMaker() {
        return function(teaType) {
            return `Making ${teaType}`;
        }

    }
    let teaMaker = createTeaMaker();
    let tea1 = teaMaker("green tea")
    console.log(tea1); // Making green tea