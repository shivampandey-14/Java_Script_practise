//loop to calculate the sum of first 10 elements of natural no.
    let sum = 0
    let i = 1
    while (i <= 10){
        sum += i;
        i++;
    }
    console.log(sum)
    
//write while loop to add elements in an array
    let arr=[]
    let index = 0
    while (i <= 10)
    {
        arr.push(index)
        index++
    }
    console.log(arr)
    
//do while loop to continue take element until stop is typed.
    let teaCollection = []
    let tea
    do {
        tea = prompt("Enter the tea flavour (stop to exit)")// use it in browser as propmt take input from browser only it will not work vs code.
        if(tea == "stop")
        {
            break
        }
        else
        {
            teaCollection.push(tea)
        }
    }
    while (true)
    console.log(teaCollection) 

//for loop to print the elements of an array
    let ar = [1,2,3,4,5,6,7,8,9,10]
    for (let i = 0; i < ar.length; i++)
    {
        ar[i]*=2
        console.log(ar[i])
    }