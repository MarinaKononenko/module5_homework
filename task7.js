let arr = [0, 1, 2, "3", null, undefined, true, false, {}, [], -4, -3, -2, -1];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log("Количество четных элементов: " + evenCount);
console.log("Количество нечетных элементов: " + oddCount);
console.log("Количество нулевых элементов: " + zeroCount);