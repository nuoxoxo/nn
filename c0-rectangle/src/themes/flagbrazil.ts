export class BrazilianFlag {

  constructor() { }

  drawBrazilianFlag(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw green field
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#00A859"; // Green color
    context.fill();
    context.closePath();

    // Draw yellow diamond
    context.beginPath();
    context.moveTo(canvas.width / 2, canvas.height / 4);
    context.lineTo((canvas.width / 4) * 3, canvas.height / 2);
    context.lineTo(canvas.width / 2, (canvas.height / 4) * 3);
    context.lineTo(canvas.width / 4, canvas.height / 2);
    context.fillStyle = "#FFCC29"; // Yellow color
    context.fill();
    context.closePath();

    // Draw blue circle
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 10, 0, 2 * Math.PI);
    context.fillStyle = "#3E4095"; // Blue color
    context.fill();
    context.closePath();
  }
}
