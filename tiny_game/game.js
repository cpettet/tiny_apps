// initial state for our game
px = py = 10; // position of snake head
gs = ts = 20;
ax = ay = 15; // position of apple
xv = yv = 0; // directional values

body = []; // { x: px, y: py }
segments = 5;

// logic for game
const game = () => {
  px += xv;
  py += yv;

  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#4cbb17";

  if (px < 0) px = ts - 1;
  if (px > ts - 1) px = 0;
  if (py < 0) py = ts - 1;
  if (py > ts - 1) py = 0;

  for (let i = 0; i < body.length; i++) {
    context.fillRect(body[i].x * gs, body[i].y * gs, gs - 2, gs - 2);
    if (body[i].x === px && body[i].y === py) {
      segments = 5;
    }
  }

  body.push({ x: px, y: py });

  while (body.length > segments) {
    body.shift();
  }

  if (ax === px && ay === py) {
    // head eats apple
    segments++;
    ax = Math.floor(Math.random() * ts);
    ay = Math.floor(Math.random() * ts);
  }

  context.fillStyle = "#FF0000";
  context.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
};

const keyDown = (e) => {
  switch (e.keyCode) {
    case 65:
      // key: A, left
      xv = -1;
      yv = 0;
      break;
    case 87:
      // key: W, up
      xv = 0;
      yv = -1;
      console.log(body);
      console.log(xv, yv);
      break;
    case 68:
      // key: D, right
      xv = 1;
      yv = 0;
      break;
    case 83:
      // key: S, down
      xv = 0;
      yv = 1;
      break;
  }
};

const init = () => {
  canvas = document.querySelector(".game");
  context = canvas.getContext("2d");
  document.addEventListener("keydown", keyDown);
  setInterval(game, 1000 / 15);
};

document.addEventListener("DOMContentLoaded", init);
