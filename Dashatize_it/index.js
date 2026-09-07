/* Description:
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5' */

//! Solution;

function dashatize(num) {
    if(isNaN(num)) return "NAN";

    return String(Math.abs(num))
    .replace(/[13579]/g, char => `-${char}-`)
    .replace(/--/g, "-")
    .replace(/^-|-$/g, "");
}

console.log(dashatize(274));
console.log(dashatize(6815));