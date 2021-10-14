const generateGame = () => {
  const canvas = document.createElement("canvas");
  canvas.id = "game";
  canvas.width = "500";
  canvas.height = "500";
  canvas.style.border = "5px solid #4cbb17";

  document.querySelector(".display").append(canvas);

  const context = canvas.getContext("2d");

  // initial state for our game
  positionX = positionY = 10; // position of snake head
  gridSize = 20;
  tableSize = 25;
  appleX = appleY = 15; // position of apple
  xVelocity = yVelocity = 0; // directional values
  const directionalValues = [
    { xVelocity: -1, yVelocity: 0 }, // going left
    { xVelocity: 0, yVelocity: -1 }, // going up
    { xVelocity: 1, yVelocity: 0 }, // going right
    { xVelocity: 0, yVelocity: 1 }, // going down
  ];
  directionalValueIndex = 0;

  body = []; // { x: positionX, y: positionY }
  segments = 5;

  // logic for game
  const game = () => {
    positionX += xVelocity;
    positionY += yVelocity;

    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#4cbb17";

    if (positionX < 0) positionX = tableSize - 1;
    if (positionX > tableSize - 1) positionX = 0;
    if (positionY < 0) positionY = tableSize - 1;
    if (positionY > tableSize - 1) positionY = 0;

    for (let i = 0; i < body.length; i++) {
      context.fillRect(
        body[i].x * gridSize,
        body[i].y * gridSize,
        gridSize - 2,
        gridSize - 2
      );
      if (body[i].x === positionX && body[i].y === positionY) {
        segments = 5;
        xVelocity = yVelocity = 0;
      }
    }

    body.push({ x: positionX, y: positionY });

    while (body.length > segments) {
      body.shift();
    }

    if (appleX === positionX && appleY === positionY) {
      // head eats apple
      segments++;
      appleX = Math.floor(Math.random() * tableSize);
      appleY = Math.floor(Math.random() * tableSize);
    }

    context.fillStyle = "#FF0000";
    context.fillRect(
      appleX * gridSize,
      appleY * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  };

  const keyDown = (e) => {
    if (xVelocity === 0 && yVelocity === 0) {
      switch (e.keyCode) {
        case 65:
          // key: A, left
          directionalValueIndex = 0;
          break;
        case 87:
          // key: W, up
          directionalValueIndex = 1;
          break;
        case 68:
          // key: D, right
          directionalValueIndex = 2;
          break;
        case 83:
          // key: S, down
          directionalValueIndex = 3;
          break;
      }
    } else {
      switch (e.keyCode) {
        case 65:
          // key: A, left
          if (directionalValueIndex !== 2) directionalValueIndex = 0;
          break;
        case 87:
          // key: W, up
          if (directionalValueIndex !== 3) directionalValueIndex = 1;
          break;
        case 68:
          // key: D, right
          if (directionalValueIndex !== 0) directionalValueIndex = 2;
          break;
        case 83:
          // key: S, down
          if (directionalValueIndex !== 1) directionalValueIndex = 3;
          break;
      }
    }

    xVelocity = directionalValues[directionalValueIndex].xVelocity;
    yVelocity = directionalValues[directionalValueIndex].yVelocity;
  };

  document.addEventListener("keydown", keyDown);
  setInterval(game, 60);
};
