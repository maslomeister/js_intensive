function toNumber(str) {
  if (typeof str != "string" || isNaN(str)) {
    throw new TypeError("Некорректный ввод!");
  }
  return Number(str);
}

const firsValue = toNumber(window.prompt("Введите целое число"));
const secondValue = toNumber(window.prompt("Введите целое число"));

console.log(
  `Ответ: ${firsValue + secondValue}, ${Math.floor(firsValue / secondValue)}`
);
