function main() {
  const canvas = document.getElementById('example');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawVector(ctx, v, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(
    200 + v.elements[0] * 20,
    200 - v.elements[1] * 20
  );
  ctx.stroke();
}

function handleDrawEvent() {
  const canvas = document.getElementById('example');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const v1 = new Vector3([
    parseFloat(v1x.value),
    parseFloat(v1y.value),
    0
  ]);

  const v2 = new Vector3([
    parseFloat(v2x.value),
    parseFloat(v2y.value),
    0
  ]);

  drawVector(ctx, v1, "red");
  drawVector(ctx, v2, "blue");
}

function handleDrawOperationEvent() {
  const canvas = document.getElementById('example');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const v1 = new Vector3([
    parseFloat(v1x.value),
    parseFloat(v1y.value),
    0
  ]);

  const v2 = new Vector3([
    parseFloat(v2x.value),
    parseFloat(v2y.value),
    0
  ]);

  drawVector(ctx, v1, "red");
  drawVector(ctx, v2, "blue");

  const op = document.getElementById("op").value;
  const s = parseFloat(document.getElementById("scalar").value);

  if (op === "add") {
    const v3 = new Vector3(v1.elements).add(v2);
    drawVector(ctx, v3, "green");
  }

  if (op === "sub") {
    const v3 = new Vector3(v1.elements).sub(v2);
    drawVector(ctx, v3, "green");
  }

  if (op === "mul") {
    const v3 = new Vector3(v1.elements).mul(s);
    const v4 = new Vector3(v2.elements).mul(s);
    drawVector(ctx, v3, "green");
    drawVector(ctx, v4, "green");
  }

  if (op === "div") {
    const v3 = new Vector3(v1.elements).div(s);
    const v4 = new Vector3(v2.elements).div(s);
    drawVector(ctx, v3, "green");
    drawVector(ctx, v4, "green");
  }

  if (op === "mag") {
    console.log("v1 magnitude:", v1.magnitude());
    console.log("v2 magnitude:", v2.magnitude());
  }

  if (op === "norm") {
    const n1 = new Vector3(v1.elements).normalize();
    const n2 = new Vector3(v2.elements).normalize();
    drawVector(ctx, n1, "green");
    drawVector(ctx, n2, "green");
  }

  if (op === "angle") {
    console.log("Angle between:", angleBetween(v1, v2));
  }

  if (op === "area") {
    console.log("Triangle area:", areaTriangle(v1, v2));
  }
}

function angleBetween(v1, v2) {
  const dot = Vector3.dot(v1, v2);
  const mag = v1.magnitude() * v2.magnitude();
  const angle = Math.acos(dot / mag);
  return angle * 180 / Math.PI;
}

function areaTriangle(v1, v2) {
  const cross = Vector3.cross(v1, v2);
  return cross.magnitude() / 2;
}
