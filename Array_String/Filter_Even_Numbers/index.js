/* 
Write `getEvens(arr)` that returns only the even numbers from an array using `filter()`.

Example: getEvens([1,2,3,4,5,6]) ➔ [2,4,6]
*/

function getEvens(arr) {
    return arr.filter(num => num % 2 === 0)
}

console.log(getEvens([1,2,3,4,5,6]));