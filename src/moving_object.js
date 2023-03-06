export default class MovingObject {
    constructor(obj) {
    this.pos = obj.pos;
	this.vel = obj.vel;
	this.radius = obj.radius; 
	this.color = obj.color; 
	}

	draw(ctx) {
        ctx.clearRect(0, 0, 500, 500);
		ctx.beginPath();
		ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.stroke();
	}

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}