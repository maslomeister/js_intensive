function isNumber(item) {
  return typeof item !== "string" && !isNaN(item) && !isNaN(parseFloat(item));
}

Object.prototype[Symbol.iterator] = function () {
  if (
    !(this.from !== undefined && isNumber(this.from)) ||
    !(this.to !== undefined && isNumber(this.to))
  ) {
    throw new Error("Поля from и to должны содержать число");
  }

  if (this.to < this.from) {
    throw new Error("Поле from не может быть меньше поля to");
  }

  const arr = Array(this.to - this.from + 1)
    .fill()
    .map((_, index) => this.from + index);

  let currIndex = -1;

  return {
    next() {
      return {
        value: arr[++currIndex],
        done: currIndex >= arr.length,
      };
    },
  };
};
