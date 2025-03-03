for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("i: ", i);
}

for (let j = 1; j < 10; j++) {
    if (j === 5) {
        console.log("found ", j);
        break;
    }
    console.log("j: ", j);
}


// while (condition) {
    
// }

// do {
    
// } while (condition);

// for of loop
let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

let greeting = "hello world"
for (const greet of greeting) {
    console.log(greet);
}

const map = new Map()
map.set("a", 1)
map.set("b", 2)
map.set("c", 3)
console.log(map)

for (const [key, val] of map) {
    console.log(`key: ${key}, val: ${val}`);
}

// for in loop
const obj = {
    "d": 4,
    "e": 5,
    "f": 6
}

for (const key in obj) {
    console.log(`key: ${key}, val: ${obj[key]}`);
}

let nums = [7, 8, 9, 10]
for (const key in nums) {
    console.log(`key: ${key}, val: ${nums[key]}`);
}

const friends = ["chandler", "joey", "ross", "monica", "rachel", "phoebe"]

friends.forEach( (value) => {
    console.log(value)
})

// function printName(value, index, array) {
//     console.log(index, value, array)
// }
// friends.forEach(printName)

// friends.forEach( function (value, index, array) {
//     console.log(index, value, array)
// })

friends.forEach( (value, index, array) => {
    console.log(index, value, array)
})

const seinfeld = [
    {
        name: "jerry",
        character: "jerry"
    },
    {
        name: "jason",
        character: "george"
    },
    {
        name: "michael",
        character: "kramer"
    },
    {
        name: "julie",
        character: "elaine"
    }
]

seinfeld.forEach( (val) => {
    console.log(val.character)
})

// filter, map and reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNums = numbers.filter( (val) => {
//     return val%2 == 0
// })
const evenNums = numbers.filter( (val) => val%2 == 0)
console.log(evenNums)

const mulByTen = numbers.map( (val) => val * 10)
console.log(mulByTen)

const operations = numbers
.map( (val) => val * 10)
.map( (val) => val + 1)
.filter( (val) => val >= 50)
console.log(operations)

const total = numbers.reduce ( (acc, curr) => acc + curr, 0)
console.log(total)