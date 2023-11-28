export class Sunset {

  constructor() { }

  drawSunsetAll(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawSunset(context, canvas);
  }
}

function drawSunset(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  // sky
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height / 2);
  ctx.fillStyle = "orange"; // orange color for sunset sky
  ctx.fill();
  ctx.closePath();

  // sea
  ctx.beginPath();
  ctx.rect(0, canvas.height / 2, canvas.width, canvas.height / 2);
  ctx.fillStyle = "#006994"; // blue for the sea
  ctx.fill();
  ctx.closePath();

  // sun
  ctx.beginPath();
  ctx.arc(canvas.width - 290, 50, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#FFD700"; // yellow
  ctx.fill();
  ctx.closePath();

  // random number of clouds (2 or 3)
  const numClouds = Math.floor(Math.random() * 2) + 2;

  for (let i = 0; i < numClouds; i++) {
    const cloudX = Math.random() * (canvas.width - 60); // random x position
    const cloudY = Math.random() * 50 + 30; // random y position between 30 and 80
    drawCloud(ctx, cloudX, cloudY);
  }

  // reflection on the sea
  ctx.beginPath();
  ctx.rect(0, canvas.height / 2 + 20, canvas.width, 20);
  ctx.fillStyle = "#8B4513"; // reflection color
  ctx.fill();
  ctx.closePath();
}

/*
function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const numCircles = Math.floor(Math.random() * 3) + 2; // rand number of circles (2 or 3)
  
  for (let i = 0; i < numCircles; i++) {
    const radius = Math.random() * 20 + 10; // rand radius between 10 and 30
    const offsetX = Math.random() * 20 - 10; // rand horizontal offset
    const offsetY = Math.random() * 10 - 5; // rand vertical offset

    ctx.beginPath();
    ctx.arc(x + offsetX, y + offsetY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF"; // white color for clouds
    ctx.fill();
    ctx.closePath();
  }
}
*/

function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath();
  ctx.arc(x, y, Math.random() * 20 + 10, 0, Math.PI * 2);
  ctx.arc(x + 30, y, 30, 0, Math.PI * 2);
  ctx.arc(x + 60, y, Math.random() * 20 + 10, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

/*
function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 30, y, 30, 0, Math.PI * 2);
  ctx.arc(x + 60, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF"; // white color for clouds
  ctx.fill();
  ctx.closePath();
}
*/
