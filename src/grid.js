const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fillStyle = "white";
context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

const createGrid = () => {
  const points = [];
  const count = 7;
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      const u = x / (count - 1);
      const v = y / (count - 1);
      points.push([u, v]);
    }
  }
  return points;
};

const points = createGrid();

points.forEach(([u, v]) => {
  const x = u * canvas.offsetWidth;
  const y = v * canvas.offsetHeight;

  context.beginPath();
  context.arc(x, y, 10, 0, Math.PI * 2);
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.stroke();
});
