function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let seucess = true;
            if (seucess) {
                resolve("Data fetched successfully");
            }
            else {
                reject("Error fetching failed");
            }
        }, 3000);
    })
}
// let response = fetchData();
// console.log(response); there are three states of the promise pending,fullfilled,fail.
//.then is used to catch when the promise is fullfilled and .catch is used to catch when the promise is rejected.

//method 1 witout chainging of then block.
// fetchData()
//     .then((data) => {
//         console.log(data); //we can use chaning of promises by returning another promise in the .then block and fetch it in next .then block.
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//method 2 with chaining of then block.
fetchData()
    .then((data) => {
        console.log(data);
        return "Data processed successfully";
    })
    .then((processedData) => {
        console.log(processedData);
    })
    .catch((error) =>
    {
        console.log(error);
    })