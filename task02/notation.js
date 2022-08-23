function isNumber(str) {
  typeof str != "string";
  return !isNaN(str);
}

const firsValue = window.prompt("Введите целое число");
const secondValue = window.prompt("Введите целое число");

if (!isNumber(firsValue) || !isNumber(secondValue)) {
  throw new TypeError("Некорректный ввод!");
}

console.log(firsValue.toString(secondValue));
