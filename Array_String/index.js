/* 
!problem : Double Each Element using map()

description : Write `doubleValues(arr)` that returns a new array with every number doubled using `map()`.

Example: doubleValues([1,2,3]) ➔ [2,4,6] 

*/

//? Solution : 

function doubleValues (arr) {
    return arr.map(num => num * 2);
}

// console.log(doubleValues([1,2,3]))


/* 
!problem : Find First Element Greater Than X

Write `findFirstGreater(arr, x)` using `find()` that returns the first number greater than x, or undefined if none exists.

Example: findFirstGreater([1,5,8,3], 4) ➔ 5

*/

//? Solution :

function findFirstGreater(arr, x) {
    return arr.find(num => num > x);
}

// console.log(findFirstGreater([1, 5, 8, 3], 4))



/* 
!problem : Check If Array Includes a Value

Write `hasValue(arr, target)` that returns true/false whether the array contains target using `includes()` and also using `some()`.

Example: hasValue([1,2,3], 2) ➔ true

*/

//? Solution :

function hasValue(arr, target) {
    return arr.includes(target);
}

console.log(hasValue([1, 2, 3], 5));