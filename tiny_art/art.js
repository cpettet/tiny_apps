const generateArt = () => {
  const canvas = document.createElement("canvas");
  canvas.id = "art";
  canvas.height = "500";
  canvas.width = "500";
  canvas.style.border = "4px solid #4cbb17";
  canvas.style.background = "#000000";

  const context = canvas.getContext("2d");

  for (let x = 0; x < 255; x++) {
    for (let y = 0; y < 255; y++) {
      if ((x * y) % 55) {
        context.fillRect(x * ((x ^ y) % 4), y * ((x ^ y) % 8), 15, 16);
        context.fillStyle = `rgb(${(x ^ y) % 23}, ${y} ,${42} `;
      }
    }
  }

  document.querySelector(".display").append(canvas);
};
