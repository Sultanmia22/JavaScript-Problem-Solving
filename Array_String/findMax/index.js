function findMax(arr) {
    return arr.reduce((max,current) => (current > max ? current : max),arr[0])
};

console.log(findMax([3, 7, 2, 9, 4]));