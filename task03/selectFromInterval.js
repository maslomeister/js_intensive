function isNumber(item) {
  return (
    !isNaN(item) && typeof item !== "string" && item === item && item % 1 === 0
  );
}

function selectFromInterval(array, firstValue, secondValue) {
  if (typeof array !== "object" && !Array.isArray(array)) {
    throw new Error("Первым параметром ожидался массив целых чисел");
  }

  if (!isNumber(firstValue) || !isNumber(secondValue))
    throw new Error("Одна или обе границы интервала не являются целым числом");

  const { firstValue: max, secondValue: min } =
    firstValue > secondValue
      ? { firstValue, secondValue }
      : { firstValue: secondValue, secondValue: firstValue };

  return array.filter((item) => {
    if (isNumber(item)) {
      return min <= item && item <= max ? true : false;
    } else {
      throw new Error("В массиве должны быть только целые числа");
    }
  });
}
