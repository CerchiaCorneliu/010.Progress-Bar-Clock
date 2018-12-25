var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#c1f3ff";
ctx.lineWidth = 20;
ctx.lineCap = "square";
ctx.shadowBlur = 10;
ctx.shadowColor = "#c1f3ff";

function renderTime() {
	var now = new Date();
	var today = now.toDateString();
	var optionsTime = { hour: 'numeric', minute: '2-digit', second: '2-digit' };
	var time = now.toLocaleString('en-US', optionsTime);
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var milliseconds = now.getMilliseconds();
	var newSeconds = seconds + (milliseconds/1000);

	// Background
	gradient = ctx.createRadialGradient(250,250,5,250,250,250);
	gradient.addColorStop(0, "#060e0f");
	gradient.addColorStop(1, "black");
	ctx.fillStyle = gradient;
	//ctx.fillStyle = "black";
	ctx.fillRect(0,0,500,500);


	// Date
	ctx.font = "46px Lucida Console";
	ctx.fillStyle = "#c1f3ff";
	ctx.fillText(today, 40, 150);

	// Time
	ctx.font = "62px Lucida Console";
	ctx.fillStyle = "#c1f3ff";
	ctx.fillText(time, 40, 200);

	// Lines
	ctx.beginPath();
	ctx.lineTo(50,250);
	ctx.lineTo(((hours * 16.5) + 50),250);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineTo(50,300);
	ctx.lineTo(((minutes * 6.6) + 50),300);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineTo(50,350);
	ctx.lineTo(((newSeconds * 6.6) + 50),350);
	ctx.stroke();

	// var dataURL = canvas.toDataURL();

	// document.getElementById("myImage").src = dataURL;

}
setInterval(renderTime, 100);