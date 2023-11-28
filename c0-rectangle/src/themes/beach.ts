export class Beach {

	constructor() {
	}

	drawBeachAll(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
		context.clearRect(0, 0, canvas.width, canvas.height)
		drawBeach(context, canvas)
	}
}

function drawBeach(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    // Sky
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height / 2)
    ctx.fillStyle = "#87CEEB" // Light blue color for the sky
    ctx.fill()
    ctx.closePath()

    // Sand
    ctx.beginPath()
    ctx.rect(0, canvas.height / 2, canvas.width, canvas.height / 2)
    ctx.fillStyle = "#F4A460" // Sandy color for the beach
    ctx.fill()
    ctx.closePath()

    // Sun
    ctx.beginPath()
    ctx.arc(canvas.width - 50, 50, 30, 0, 2 * Math.PI, false)
    ctx.fillStyle = "#FFD700" // Yellow color for the sun
    ctx.fill()
    ctx.closePath()

    // Ocean
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height / 2)
    ctx.fillStyle = "#00BFFF" // Blue color for the ocean
    ctx.fill()
    ctx.closePath()

    // Palm trees
    drawPalmTree(ctx, 100, canvas.height / 2 - 20)
    drawPalmTree(ctx, canvas.width - 150, canvas.height / 2 - 20)

    // Beach umbrella(s)
    drawUmbrella(ctx, canvas.width / 2 - 53, canvas.height / 2 + 13)
	drawUmbrella(ctx, canvas.width / 2 - 161, canvas.height / 2 + 42)
	drawUmbrella(ctx, canvas.width / 2 + 81, canvas.height / 2 + 42 * 2)
}

function drawPalmTree(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Tree trunk
    ctx.beginPath()
    ctx.rect(x, y, 20, 80)
    ctx.fillStyle = "#8B4513" // Brown color for the trunk
    ctx.fill()
    ctx.closePath()

    // Tree leaves
    ctx.beginPath()
    ctx.arc(x + 10, y - 40, 40, 0, 2 * Math.PI, false)
    ctx.fillStyle = "#008000" // Green color for the leaves
    ctx.fill()
    ctx.closePath()
}

function drawUmbrella(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Umbrella pole
    ctx.beginPath()
    ctx.rect(x + 10, y, 10, 60)
    ctx.fillStyle = "#8B4513" // Brown color for the pole
    ctx.fill()
    ctx.closePath()

    // Umbrella top
    ctx.beginPath()
    ctx.moveTo(x - 20, y)
    ctx.lineTo(x + 50, y)
    ctx.lineTo(x + 15, y - 30)
    ctx.fillStyle = "#FF0000" // Red color for the top
    ctx.fill()
    ctx.closePath()
}
