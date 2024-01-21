const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fillStyle = "teal";
context.fillRect(0, 0, canvas.width, canvas.height);

context.beginPath();
console.log(canvas.width / 2);
context.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2, false);
context.fillStyle = "white";
context.fill();

context.strokeStyle = "lightgrey";
context.lineWidth = 5;
context.stroke();
