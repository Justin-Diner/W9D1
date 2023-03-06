import * as Util from "./util.js";

class Asteroid extends MovingObject {
	static RADIUS = 25;
	static COLOR = "blue";

	constructor(options){
		this.pos = options.pos;
		this.vel = [Util.randomVec(25), Util.randomVec(25)]
		//this.color = Asteroid.COLOR;
		//this.radius = Asteroid.RADIUS;
		super(

		)

	}

}

export default Asteroid;