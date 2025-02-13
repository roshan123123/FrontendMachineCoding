class Calculator {
  constructor(initialValue) {
    this.value = initialValue;
  }
  add(value) {
    this.value = this.value + value;
    return this;
  }

  subtract(value) {
    this.value = this.value - value;
    return this;
  }

  Multiply(value) {
    this.value = this.value * value;
    return this;
  }

  getValue() {
    return this.value;
  }
}

const calculator = new Calculator(3);
const value = calculator.add(4).subtract(1).getValue();
console.log(value);
