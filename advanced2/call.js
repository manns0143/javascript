function setUsername(username) {
    this.username = username
    // console.log('called', username)
    // return this.username
}

function createUser(username, email, password) {
    // setUsername(username) // --> this does not work
    setUsername.call(this, username) // --> thus, call
    this.email = email
    this.password = password
}

const user1 = new createUser("manns0143", "mann@shah.com", "password")
console.log(user1)
// console.log(user1.username)