export class Football {

	constructor() {}

	drawFootballPitchAll(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawFootballPitch(context, canvas);
	}
}

const drawFootballPitch = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
	// Outer lines
	ctx.beginPath();
	ctx.rect(0,0, canvas.width, canvas.height);
	ctx.fillStyle = "#060";
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#FFF";
	ctx.stroke();
	ctx.closePath();

	ctx.fillStyle = "#FFF";

	// Mid line
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();
	ctx.closePath();

	//Mid circle
	ctx.beginPath()
	ctx.arc(canvas.width / 2, canvas.height / 2, 73, 0, 2*(Math.PI), false);
	ctx.stroke();
	ctx.closePath();

	//Mid point
	ctx.beginPath()
	ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2*Math.PI, false);
	ctx.fill();
	ctx.closePath();

	//Home penalty box
	ctx.beginPath();
	ctx.rect(0, (canvas.height - 322) / 2, 132, 322);
	ctx.stroke();
	ctx.closePath();

	//Home goal box
	ctx.beginPath();
	ctx.rect(0, (canvas.height - 146) / 2, 44, 146);
	ctx.stroke();
	ctx.closePath();

	// //Home goal 
	// ctx.beginPath();
	// ctx.moveTo(1, (canvas.height / 2) - 22);
	// ctx.lineTo(1, (canvas.height / 2) + 22);
	// ctx.lineWidth = 2;
	// ctx.stroke();
	// ctx.closePath();
	// ctx.lineWidth = 1;

	//Home penalty point
	ctx.beginPath()
	ctx.arc(88, canvas.height / 2, 1, 0, 2*Math.PI, true);
	ctx.fill();
	ctx.closePath();

	//Home half circle
	ctx.beginPath()
	ctx.arc(88, canvas.height / 2, 73, 0.29*Math.PI, 1.71*Math.PI, true);
	ctx.stroke();
	ctx.closePath();

	//Away penalty box
	ctx.beginPath();
	ctx.rect(canvas.width-132, (canvas.height - 322) / 2, 132, 322);
	ctx.stroke();
	ctx.closePath();

	//Away goal box
	ctx.beginPath();
	ctx.rect(canvas.width-44, (canvas.height - 146) / 2, 44, 146);
	ctx.stroke();
	ctx.closePath();

	// //Away goal 
	// ctx.beginPath();
	// ctx.moveTo(canvas.width-1, (canvas.height / 2) - 22);
	// ctx.lineTo(canvas.width-1, (canvas.height / 2) + 22);
	// ctx.lineWidth = 2;
	// ctx.stroke();
	// ctx.closePath();
	// ctx.lineWidth = 1;

	//Away penalty point
	ctx.beginPath()
	ctx.arc(canvas.width-88, canvas.height / 2, 1, 0, 2*Math.PI, true);
	ctx.fill();
	ctx.closePath();

	//Away half circle
	ctx.beginPath()
	ctx.arc(canvas.width-88, canvas.height / 2, 73, 0.71*Math.PI, 1.29*Math.PI, false);
	ctx.stroke();
	ctx.closePath();

	//Home L corner
	ctx.beginPath()
	ctx.arc(0, 0, 8, 0, 0.5*Math.PI, false);
	ctx.stroke();
	ctx.closePath();

	//Home R corner
	ctx.beginPath()
	ctx.arc(0, canvas.height, 8, 0, 2*Math.PI, true);
	ctx.stroke();
	ctx.closePath();

	//Away R corner
	ctx.beginPath()
	ctx.arc(canvas.width, 0, 8, 0.5*Math.PI, 1*Math.PI, false);
	ctx.stroke();
	ctx.closePath();

	//Away L corner
	ctx.beginPath()
	ctx.arc(canvas.width, canvas.height, 8, 1*Math.PI, 1.5*Math.PI, false);
	ctx.stroke();
	ctx.closePath();	
}
