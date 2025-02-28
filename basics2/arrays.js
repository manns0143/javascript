const nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(nums[0]);
nums.push(6);
console.log(nums);
nums.pop();
console.log(nums);
nums.shift();
console.log(nums);
nums.unshift(0);
console.log(nums);
console.log(nums.includes(1))
console.log(nums.indexOf(3))

const copy = nums.join() // returns a string -> 0,2,3,4,5
console.log(copy);

const nums1 = [1, 2, 3, 4, 5, 6]
const nums2 = nums1.slice(1, 3)
console.log(nums1)
const nums3 = nums1.splice(1, 3)
console.log(nums1)

const rollNos = [1, 2, 3, 4, 5]
const names = ["ted", "barney", "lily", "robin", "marshall"]
// rollNos.push(names)
// console.log(rollNos)
// const students = rollNos.concat(names)
// console.log(students)
const students = [...rollNos, ...names]
console.log(students)

const arr = [1, 2, 3, 4, 5]
console.log(arr)
/*
const arr = [1, 2, 3, 4, 5]
undefined
console.log(arr)
(5) [1, 2, 3, 4, 5]
0
: 
1
1
: 
2
2
: 
3
3
: 
4
4
: 
5
length
: 
5
[[Prototype]]
: 
Array(0)
at
: 
ƒ at()
concat
: 
ƒ concat()
constructor
: 
ƒ Array()
    from
    : 
    ƒ from()
    fromAsync
    : 
    ƒ fromAsync()
    isArray
    : 
    ƒ isArray()
    length
    : 
    1
    name
    : 
    "Array"
    of
    : 
    ƒ of()
    prototype
    : 
    [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
    Symbol(Symbol.species)
    : 
    ƒ Array()
    Symbol(Symbol.species)
    : 
    ƒ Array()
    arguments
    : 
    (...)
    caller
    : 
    (...)
    [[Prototype]]
    : 
    ƒ ()
    [[Scopes]]
    : 
    Scopes[0]
copyWithin
: 
ƒ copyWithin()
entries
: 
ƒ entries()
every
: 
ƒ every()
fill
: 
ƒ fill()
filter
: 
ƒ filter()
find
: 
ƒ find()
findIndex
: 
ƒ findIndex()
findLast
: 
ƒ findLast()
findLastIndex
: 
ƒ findLastIndex()
flat
: 
ƒ flat()
flatMap
: 
ƒ flatMap()
forEach
: 
ƒ forEach()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
join
: 
ƒ join()
keys
: 
ƒ keys()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
map
: 
ƒ map()
pop
: 
ƒ pop()
push
: 
ƒ push()
reduce
: 
ƒ reduce()
reduceRight
: 
ƒ reduceRight()
reverse
: 
ƒ reverse()
shift
: 
ƒ shift()
slice
: 
ƒ slice()
some
: 
ƒ some()
sort
: 
ƒ sort()
splice
: 
ƒ splice()
toLocaleString
: 
ƒ toLocaleString()
toReversed
: 
ƒ toReversed()
toSorted
: 
ƒ toSorted()
toSpliced
: 
ƒ toSpliced()
toString
: 
ƒ toString()
unshift
: 
ƒ unshift()
values
: 
ƒ values()
with
: 
ƒ with()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.unscopables)
: 
{at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
*/