export class Pond {
  constructor() {}

  drawPond(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const shadesOfBlue = ["#87CEEB", "#ADD8E6", "#B0E0E6", "#87CEEB"];

    shadesOfBlue.forEach((shade, index) => {
      context.beginPath();
      context.rect(0, (canvas.height / 4) * index, canvas.width, canvas.height / 4);
      context.fillStyle = shade;
      context.fill();
      context.closePath();

    });

    // Draw random ripples on the surface
    for (let i = 0; i < 42; i++) {
      drawRandomRipple(context, canvas.width, canvas.height);
    }
  }
}

function drawRandomRipple(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
  const rippleX = Math.random() * canvasWidth;
  const rippleY = canvasHeight - (Math.random() * canvasHeight / 2) - 42;
  const rippleRadius = Math.random() * 20 + 10;

  ctx.beginPath();
  ctx.arc(rippleX, rippleY, rippleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFFFF";
  ctx.globalAlpha = 0.4;
  ctx.fill();
  ctx.globalAlpha = 1.0;
  ctx.closePath();
}

/*
function drawWavyLine(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  color: string
) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  const waveFrequency = 12;
  const amplitude = 6;
  for (let y = startY; y <= endY + 1; y++) {
    const x = endX + amplitude * Math.sin((y - startY) / waveFrequency);
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.closePath();
}
*/
