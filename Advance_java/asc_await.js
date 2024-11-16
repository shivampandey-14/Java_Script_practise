function fetchUserData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject({name:"Shivam",url:"https://chaicode.com"})
        },3000)
    })
}
//Mtehod 1 to fetch the data
// fetchUserData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//Method 2 to fetch data.
async function getUserData() {
    //using try catch block to handle the error this will not close the program.
    //if error occured but keep running it by displaying the error.
    try {

        console.log("Fetching the data..")
        const userData = await fetchUserData() //await function is only used with async function.
        console.log("User data:",userData);
    }
    catch (error) {
        console.log("Error while fetching the data",error);
    }
}

getUserData()