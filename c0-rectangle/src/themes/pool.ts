export class Pool {
  constructor() {}

  drawPool(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const shadesOfBlue = ["#0033A0", "#0050A1", "#0077A3", "#0099A4"];

    shadesOfBlue.forEach((shade, index) => {
      context.beginPath();
      context.rect(0, (canvas.height / 4) * index, canvas.width, canvas.height / 4);
      context.fillStyle = shade;
      context.fill();
      context.closePath();

      // Draw vertical wavy lines
      drawWavyLine(
        context,
        (canvas.width / 2) + 20,
        (canvas.height / 4) * index,
        (canvas.width / 2) + 20,
        (canvas.height / 4) * (index + 1),
        "#FFFFFF"
      );
      drawWavyLine(
        context,
        (canvas.width / 2),
        (canvas.height / 4) * index,
        (canvas.width / 2),
        (canvas.height / 4) * (index + 1),
        "#FFFFFF"
      );
      drawWavyLine(
        context,
        (canvas.width / 2) - 20,
        (canvas.height / 4) * index,
        (canvas.width / 2) - 20,
        (canvas.height / 4) * (index + 1),
        "#FFFFFF"
      );
    });
  }
}

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
