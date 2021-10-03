const render = () => {
  const canvas = document.getElementById("art");
  const context = canvas.getContext("2d");
  for (let x = 0; x < 255; x++) {
    for (let y = 0; y < 255; y++) {
      if ((x * y) % 55) {
        context.fillRect(x * ((x ^ y) % 4), y * ((x ^ y) % 8), 15, 16);
        context.fillStyle = `rgb(${(x ^ y) % 23}, ${y} ,${42} `;
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", render);
