export class FrenchFlag {

  constructor() { }

  drawFrenchFlag(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw blue vertical stripe on the left
    context.beginPath();
    context.rect(0, 0, canvas.width / 3, canvas.height);
    context.fillStyle = "#0055A4"; // Dark blue color
    context.fill();
    context.closePath();

    // Draw white vertical stripe in the middle
    context.beginPath();
    context.rect(canvas.width / 3, 0, canvas.width / 3, canvas.height);
    context.fillStyle = "#FFFFFF"; // White color
    context.fill();
    context.closePath();

    // Draw red vertical stripe on the right
    context.beginPath();
    context.rect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
    context.fillStyle = "#EF3340"; // Red color
    context.fill();
    context.closePath();
  }
}
