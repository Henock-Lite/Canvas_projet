const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function posmouss(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mousline(e) {
  const getpos = posmouss(e);
  ctx.lineTo(getpos.x, getpos.y);
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 10;
}

canvas.addEventListener("mousedown", (e) => {
  const getpos = posmouss(e);
  ctx.beginPath();
  ctx.moveTo(getpos.x, getpos.y);

  canvas.addEventListener("mousemove", mousline);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mousline);
  });

  reset.addEventListener("click", () => {
    ctx.clearRect("0", "0", (canvas.height = "500"), (canvas.width = "800"));
  });
});
