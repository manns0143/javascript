const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("hello world")
        resolve()
    }, 1000);
}).then(() => {
    console.log("promise resolved")
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "ted",
            age: 22
        })
    }, 1000);
}).then((user) => {
    console.log(user)
})

// .then .catch .finally
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        // let error = true
        if (!error) {
            resolve({
                name: "marshall",
                age: 25
            })
        } else {
            reject("error, something went wrong")
        }
    }, 1000);
})

promise3.then((user) => {
    console.log(user)
    return user.name
})
.then((name) => {
    console.log(name)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log('promise is either resolved or rejected'))

// async await function
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        // let error = true
        if (!error) {
            resolve({
                name: "barney",
                age: 27
            })
        } else {
            reject("error, something went wrong")
        }
    }, 1000);
})

async function consumePromise4() {
    try {
        const response = await promise4
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise4()

// fetch using .then and .catch
fetch("https://api.github.com/users/manns0143")
.then((data) => {
    console.log(data)
    return data.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

// fetch using async await and try catch 
async function getGithubInfo() {
    try {
        const response = await fetch("https://api.github.com/users/manns0143")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("error: ", error)
    }
}
getGithubInfo()