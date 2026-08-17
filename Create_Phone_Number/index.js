//! Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example : 
/* createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])  => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parentheses! */

//! Solutaion 1: 

/* function createPhoneNuber (arr){
    let format = "(xxx) xxx-xxxx"

    for(let i = 0; i < arr.length ; i++){
        format = format.replace("x",arr[i])
    }

    return format
}

const result = createPhoneNuber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(result) */

//! Solution 2: 
function createPhoneNumber (arr) {
    const firstPart = arr.slice(0,3).join("")
    const secondPard = arr.slice(3,6).join("")
    const thirdPart = arr.slice(6,10).join("")

    return (`(${firstPart}) ${secondPard}-${thirdPart}`)
}

const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log("Result = ", result)