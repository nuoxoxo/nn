export class Raining {

  constructor() { }

  drawRaining(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawRainyDay(context, canvas);
  }
}

function drawRainyDay(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  // Background
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#B0E0E6"; // Light blue color for the sky
  ctx.fill();
  ctx.closePath();

  // Rain
  for (let i = 0; i < 100; i++) {
    const rainX = Math.random() * canvas.width;
    const rainY = Math.random() * canvas.height;
    drawRaindrop(ctx, rainX, rainY);
  }

  // something umbrella-like
  // drawUmbrella(ctx, canvas.width / 2, canvas.height - 100);
}

function drawRaindrop(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 2, y + 10);
  ctx.strokeStyle = "#4682B4"; // Steel blue color for raindrops
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}

/*
function drawUmbrella(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const umbrellaTopHeight = 40;
  const umbrellaTopWidth = 80;
  const umbrellaHandleWidth = 10;
  const umbrellaHandleHeight = 150;

  // Umbrella top (inverted)
  ctx.beginPath();
  ctx.moveTo(x - umbrellaTopWidth / 2, y);
  ctx.lineTo(x + umbrellaTopWidth / 2, y);
  ctx.lineTo(x, y - umbrellaTopHeight);
  ctx.closePath();
  ctx.fillStyle = "#8B4513"; // Saddle brown color for umbrella top
  ctx.fill();

  // Umbrella handle
  ctx.beginPath();
  ctx.rect(x - umbrellaHandleWidth / 2, y, umbrellaHandleWidth, umbrellaHandleHeight);
  ctx.fillStyle = "#A52A2A"; // Brown color for umbrella handle
  ctx.fill();
  ctx.closePath();
}
*/
