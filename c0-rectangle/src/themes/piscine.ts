export class Piscine {

  constructor() { }

  drawPiscine(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // blue field
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#0033A0";
    context.fill();
    context.closePath();

    drawWavyLine(context, 0, canvas.height / 2, canvas.width, canvas.height / 2, "#FFFFFF");
    drawWavyLine(context, 0, (canvas.height / 2) - 20, canvas.width, (canvas.height / 2) - 20, "#FFFFFF");
    drawWavyLine(context, 0, (canvas.height / 2) + 20, canvas.width, (canvas.height / 2) + 20, "#FFFFFF");
  }
}

function drawWavyLine(ctx: CanvasRenderingContext2D, startX: number, startY: number, endX: number, endY: number, color: string) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  const waveFrequency = 40;
  for (let x = startX; x <= endX; x += 1) {
    const y = endY + 5 * Math.sin((x - startX) / waveFrequency);
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.closePath();
}
