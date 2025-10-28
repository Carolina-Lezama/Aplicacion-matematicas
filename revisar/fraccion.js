// fraccion.js
export class Fraccion {
  constructor(numerador = 1, denominador = 1) {
    this.numerador = numerador;
    this.denominador = denominador === 0 ? 1 : denominador;
  }

  valor() {
    return this.numerador / this.denominador;
  }

  simplificar() {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(this.numerador, this.denominador);
    this.numerador /= divisor;
    this.denominador /= divisor;
  }

  toString() {
    return `${this.numerador}/${this.denominador}`;
  }
}
