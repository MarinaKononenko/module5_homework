let str = "Hello";
let reversedStr = "";

// Проходим по строке справа налево и добавляем каждый символ в начало результирующей строки
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr);