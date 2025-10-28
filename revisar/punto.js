// punto.js
export class Punto {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
