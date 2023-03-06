export default class MovingObject {
    constructor(pos, vel, radius, color) {
    this.pos = pos;
	this.vel = vel;
	this.radius = radius; 
	this.color = color; 
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.pos[0], this.pos[1], this.radius[0], this.radius[1], 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.stroke(); 
	}
}