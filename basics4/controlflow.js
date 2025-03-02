// if (condition) {
    
// } else {
    
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

if (2 == "2") {
    console.log("2 == '2' is true");
} else {
    console.log("2 == '2' is false");
}

if (2 === "2") {
    console.log("2 === '2' is true");
} else {
    console.log("2 === '2' is false");
}

if (false == 0) { // false == ""
    console.log("false == 0 is true");
} else {
    console.log("false == 0 is false");
}

if (false === 0) { // false === " "
    console.log("false === 0 is true");
} else {
    console.log("false === 0 is false");
}

// falsy values -> false, 0, "", null, undefined, NaN
// truthy values -> true, 1, " ", "0", "false", [], {}, function(){}

const email = "mann@google.com"
const watchHistory = []
const user = {}

if (email) {
    console.log("Email is present");
} else {
    console.log("Email is not present");
}

if (watchHistory.length === 0) {
    console.log("Watch history is empty");
} else {
    console.log("Watch history is not empty");
}

if (Object.keys(user).length === 0) {
    console.log("User object is empty");
} else {
    console.log("User object is not empty");
}

// ?? : nullish coalescing operator
// It returns the right-hand operand when the left-hand operand is null or undefined 
const val1 = 5 ?? 10
const val2 = null ?? 20
const val3 = undefined ?? 30
console.log(val1, val2, val3)

// ternary operator
const age = 22
age >= 18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote")