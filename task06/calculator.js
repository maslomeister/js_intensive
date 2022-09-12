class Calculator {
  #xVal;
  #yVal;

  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y))
      throw new Error("Конструктор класса принимает два числа");
    if (arguments.length > 2)
      throw new Error("Конструктор класса принимает только два числа");
    this.#xVal = x;
    this.#yVal = y;
  }

  setX(num) {
    if (!Number.isFinite(num)) throw new Error("Аргумент должен быть числом");
    this.#xVal = num;
  }

  setY(num) {
    if (!Number.isFinite(num)) throw new Error("Аргумент должен быть числом");
    this.#yVal = num;
  }

  logSum() {
    console.log(this.#xVal + this.#yVal);
  }

  logMul() {
    console.log(this.#xVal * this.#yVal);
  }

  logSub() {
    console.log(this.#xVal - this.#yVal);
  }

  logDiv() {
    if (this.#yVal === 0) throw new Error("Нельзя поделить на 0");
    console.log(this.#xVal % this.#yVal);
  }
}
