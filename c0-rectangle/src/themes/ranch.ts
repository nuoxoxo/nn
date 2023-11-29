export class Ranch {

	constructor() {}

	drawRanchAll(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawRanch(context, canvas);
	}
}

function drawRanch(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {

	// sky
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height / 2);
	ctx.fillStyle = "#FDB813"; // warm sunset color
	ctx.fill();
	ctx.closePath();

	// ground
	ctx.beginPath();
	ctx.rect(0, canvas.height / 2 + 22, canvas.width, canvas.height / 2 + 33);
	ctx.fillStyle = "#4E3229"; // rich brown for the ground
	ctx.fill();
	ctx.closePath();

	// sun
	ctx.beginPath();
	ctx.arc(canvas.width - 740, 99, 150, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#FFD700"; // yellow
	ctx.fill();
	ctx.closePath();

	// barn
	drawBarn(ctx, canvas.width / 2 - 60, canvas.height / 2 - 70);

	// trees
	drawTree(ctx, 100, canvas.height / 2 - 50);
	// drawTree(ctx, canvas.width - 160, canvas.height / 2 + 99);

	// Additional asymmetrical elements
	drawTree(ctx, canvas.width / 3, canvas.height / 2 - 30);
	drawBarn(ctx, canvas.width - 250, canvas.height / 2 - 63);
	drawTree(ctx, canvas.width - 50, canvas.height / 2 + 10);
}


function drawBarn(ctx: CanvasRenderingContext2D, x: number, y: number) {
	// barn
	ctx.beginPath();
	ctx.rect(x, y, 120, 80);
	ctx.fillStyle = "#8B4513"; // brownish-red for the barn
	ctx.fill();
	ctx.closePath();

	// roof
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 60, y - 40);
	ctx.lineTo(x + 120, y);
	ctx.fillStyle = "#964514"; // darker red for the roof
	ctx.fill();
	ctx.closePath();
}

function drawTree(ctx: CanvasRenderingContext2D, x: number, y: number) {
	// tree trunk
	ctx.beginPath();
	ctx.rect(x, y, 20, 60);
	ctx.fillStyle = "#8B4513"; // brownish-red for the tree trunk
	ctx.fill();
	ctx.closePath();

	// leaves
	ctx.beginPath();
	ctx.arc(x + 10, y - 20, 30, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#228B22"; // dark green for the leaves
	ctx.fill();
	ctx.closePath();
}
