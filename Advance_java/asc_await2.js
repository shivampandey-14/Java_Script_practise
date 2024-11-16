function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Shivam", url: "https://chaicode.com" })
        }, 3000)
    })
}

function fetchCommentData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove({ comment: "Hello" })
        }, 2000)
    })
}

async function getBlogData() {
    try {
        console.log("Fetching the blog data..")
        // const userData = await fetchUserData()
        // const commentData = await fetchCommentData() better way to do is to use Promise.all
        const [userData,commentData] = await Promise.all([fetchUserData(), fetchCommentData()])
            
        console.log("User data:", userData)
        console.log("Comment data:", commentData)
        console.log("fetching completed")
    }
    catch(error){
        console.error("Error fetching blog data")
    }
}
getBlogData()