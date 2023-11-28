export class Farm {

	constructor() {}

	drawFarmAll(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
		context.clearRect(0, 0, canvas.width, canvas.height)
		drawFarm(context, canvas)
	}
}

function drawFarm(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
	// sky
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height / 2);
	ctx.fillStyle = "#87CEEB"; // light blue color for the sky
	ctx.fill();
	ctx.closePath();

	// ground
	ctx.beginPath();
	ctx.rect(0, canvas.height / 2, canvas.width, canvas.height / 2);
	ctx.fillStyle = "#8B4513"; // ground
	ctx.fill();
	ctx.closePath();

	// sun
	ctx.beginPath();
	ctx.arc(canvas.width - 50, 50, 30, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#FFD700"; // yellow
	ctx.fill();
	ctx.closePath();

	// barn
	drawBarn(ctx, canvas.width / 2 - 60, canvas.height / 2 - 80);

	// trees
	drawTree(ctx, 100, canvas.height / 2 - 50);
	drawTree(ctx, canvas.width - 150, canvas.height / 2 - 50);
}

function drawBarn(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // barn 
    ctx.beginPath();
    ctx.rect(x, y, 120, 80);
    ctx.fillStyle = "#8B4513"; // barn
    ctx.fill();
    ctx.closePath();

    // roof
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 60, y - 40);
    ctx.lineTo(x + 120, y);
    ctx.fillStyle = "#FF0000"; // red roof
    ctx.fill();
    ctx.closePath();
}

function drawTree(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // tree trunk
    ctx.beginPath();
    ctx.rect(x, y, 20, 60);
    ctx.fillStyle = "#8B4513"; // tree trunks
    ctx.fill();
    ctx.closePath();

    // leaves
    ctx.beginPath();
    ctx.arc(x + 10, y - 20, 30, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#008000"; // leaves are green
    ctx.fill();
    ctx.closePath();
}
