Object.prototype[Symbol.iterator] = function () {
  let start = this.from - 1;
  const end = this.to;
  if (
    !(start !== undefined && Number.isFinite(start)) ||
    !(end !== undefined && Number.isFinite(end))
  ) {
    throw new Error("Поля from и to должны содержать число");
  }

  if (end - 1 < start) {
    throw new Error("Поле from не может быть меньше поля to");
  }

  return {
    next() {
      return {
        value: ++start,
        done: start > end,
      };
    },
  };
};
