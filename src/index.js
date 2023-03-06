import MovingObject from "./moving_object"

const mo = new MovingObject({
    pos: [100, 75],
    vel: [50, 0],
    radius: 50,
    color: "green"
  });


  document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
	canvas.height = 500; 
	canvas.width = 500;
	const ctx = canvas.getContext("2d");

    mo.draw(ctx);
    setInterval(mo.move(), 500)

});


console.log("Webpack is working!")