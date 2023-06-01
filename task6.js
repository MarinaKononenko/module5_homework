let arr = [1, 1, 1, 1, 1];
let areAllEqual = arr.every((val, i, arr) => val === arr[0]);

console.log(areAllEqual);