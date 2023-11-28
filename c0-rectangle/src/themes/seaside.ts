export class Seaside {

  constructor() { }

  drawSeasideAll(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawSeaside(context, canvas);
  }
}

function drawSeaside(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  // sky
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height / 2);
  ctx.fillStyle = "#87CEEB"; // light blue color for the sky
  ctx.fill();
  ctx.closePath();

  // sea
  ctx.beginPath();
  ctx.rect(0, canvas.height / 2, canvas.width, canvas.height / 2);
  ctx.fillStyle = "#4682B4"; // deep blue color for the sea
  ctx.fill();
  ctx.closePath();

  // sun
  ctx.beginPath();
  ctx.arc(canvas.width - 50, 50, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#FFD700"; // yellow
  ctx.fill();
  ctx.closePath();

  // waves
  drawWaves(ctx, canvas.width, canvas.height / 2, "#FFFFFF");

  // sand
  ctx.beginPath();
  ctx.rect(0, canvas.height / 2 + 20, canvas.width, 20);
  ctx.fillStyle = "#D2B48C"; // sandy color
  ctx.fill();
  ctx.closePath();

  // palm tree
  drawPalmTree(ctx, 100, canvas.height / 2 - 50);
  drawPalmTree(ctx, canvas.width - 150, canvas.height / 2 - 50);
}

function drawWaves(ctx: CanvasRenderingContext2D, width: number, height: number, color: string) {
  // Draw simple sinusoidal waves
  ctx.beginPath();
  ctx.moveTo(0, height);
  for (let x = 0; x <= width; x += 10) {
      const y = height + Math.sin(x / 20) * 10;
      ctx.lineTo(x, y);
  }
  ctx.lineTo(width, height);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawPalmTree(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // tree trunk
  ctx.beginPath();
  ctx.rect(x, y, 20, 60);
  ctx.fillStyle = "#8B4513"; // tree trunk color
  ctx.fill();
  ctx.closePath();

  // leaves
  ctx.beginPath();
  ctx.arc(x + 10, y - 40, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#008000"; // leaves are green
  ctx.fill();
  ctx.closePath();
}
