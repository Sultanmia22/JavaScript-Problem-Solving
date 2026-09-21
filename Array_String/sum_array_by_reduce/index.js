function sumArray(arr) {
    return arr.reduce((total,current) => total + current, 0);
};
console.log(sumArray([1, 2, 3, 4]));