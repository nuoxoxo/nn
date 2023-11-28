export class Night {
	constructor() { }

	drawNightAll(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
		context.clearRect(0, 0, canvas.width, canvas.height)
		drawNight(context, canvas)

	}
}
function drawNight(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
	// space background
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000000"; // black color for space background
	ctx.fill();
	ctx.closePath();

	// stars
	drawRandomStars(ctx, canvas, 10); // Add 10 random stars

	// planets
	drawRandomPlanets(ctx, canvas, 2); // Add 2 random planets
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

function drawPlanet(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

function drawRandomStars(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, numStars: number) {
	for (let i = 0; i < numStars; i++) {
			const x = Math.random() * canvas.width;
			const y = Math.random() * canvas.height;
			const radius = Math.random() * 2 + 1; // Random radius between 1 and 3
			const color = "#FFFFFF";
			drawStar(ctx, x, y, radius, color);
	}
}

function drawRandomPlanets(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, numPlanets: number) {
	for (let i = 0; i < numPlanets; i++) {
			const x = Math.random() * canvas.width;
			const y = Math.random() * canvas.height;
			const radius = Math.random() * 30 + 10; // Random radius between 10 and 40
			const color = getRandomColor();
			drawPlanet(ctx, x, y, radius, color);
	}
}

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}