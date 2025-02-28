let score1 = 13;
let score2 = "13";
let score3 = Number(score2);
let score4 = "13abc";
let valueInNumber = Number(score4);
let isLoggedIn = true;
let valueInNumber2 = Number(isLoggedIn);
let isLoggedIn2 = 1;
let valueInBoolean = Boolean(isLoggedIn2);

console.log(score1);
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);
console.log(valueInNumber);
console.log(typeof valueInNumber);
console.log(valueInNumber2);
console.log(typeof valueInNumber2);
console.log(valueInNumber);
console.log(typeof valueInNumber);
console.log(valueInBoolean);
console.log(typeof valueInBoolean); // 1 -> true, 0 -> false

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// dont write code like this

console.log("2" == 2);
console.log("2" === 2);

const marks = [1, 2, 3, 4, 5];
let info = {
  name: "robin",
  age: 25,
};
const func = function () {
  console.log("Hello World");
};
console.log(typeof marks);
console.log(typeof info);
console.log(typeof func);

// primitive data types -> stack memory -> call by value
let name1 = "barney";
let name2 = name1;
name2 = "stinson";
console.log(name1);
console.log(name2);

// reference/non primitive data types -> heap memory -> call by reference
let info1 = {
  name: "lily",
  email: "lily@g.co",
};
let info2 = info1;
info2.email = "lily@google.com";
console.log(info1);
console.log(info2);

const name = new String("mann");
console.log(name);
/*
String {'mann'}
0
: 
"m"
1
: 
"a"
2
: 
"n"
3
: 
"n"
length
: 
4
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"mann"
*/

const num = new Number(5)
console.log(num)
/*
const num = new Number(5)
undefined
console.log(num)

Number {5}
[[Prototype]]
: 
Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]
: 
5
*/

console.log(Math)
/*
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()
Symbol(Symbol.toStringTag)
: 
"Math"
[[Prototype]]
: 
Object
*/

const rand = Math.random()
console.log(rand)
console.log((rand*10) + 1)
console.log(Math.floor(rand*10) + 1)