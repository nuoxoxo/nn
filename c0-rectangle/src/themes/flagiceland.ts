export class IcelandicFlag {

  constructor() { }

  drawIcelandicFlag(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw blue field
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#005CBF"; // Blue color
    context.fill();
    context.closePath();

    // Draw white cross (horizontal)
    context.beginPath();
    context.rect(0, canvas.height / 3, canvas.width, canvas.height / 3);
    context.fillStyle = "#FFFFFF"; // White color
    context.fill();
    context.closePath();

    // Draw white cross (vertical)
    context.beginPath();
    context.rect(canvas.width / 3, 0, canvas.width / 3, canvas.height);
    context.fillStyle = "#FFFFFF"; // White color
    context.fill();
    context.closePath();
  }
}
