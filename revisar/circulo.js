// circulo.js
import { Punto } from "./punto.js";
import { Fraccion } from "./fraccion.js";

export class Circulo extends Punto {
  constructor(x, y, radio, fraccion) {
    super(x, y);
    this.radio = radio;
    this.fraccion = fraccion;
  }

  // Dibuja el círculo completo y rellena la parte correspondiente a la fracción
  dibujarFraccion(ctx) {
    const partes = this.fraccion.denominador;
    const rellenas = this.fraccion.numerador;
    const anguloPorParte = (2 * Math.PI) / partes;

    // Dibujar círculo base
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar porciones rellenas según la fracción
    for (let i = 0; i < rellenas; i++) {
      const inicio = i * anguloPorParte;
      const fin = inicio + anguloPorParte;

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.arc(this.x, this.y, this.radio, inicio, fin);
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 150, 255, 0.5)";
      ctx.fill();
    }
  }
}
