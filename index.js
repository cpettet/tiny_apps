const appList = Object.values(apps);

const display = document.querySelector(".display");
const appNameSpan = document.querySelector(".app__name");
const options = document.querySelector(".options");

const cleanUp = () => {
  document.body.style.backgroundColor = "#000000";
  document.body.style.color = "#FFFFFF"
  display.innerHTML = "";
  options.innerHTML = "";
};

const render = appNameSpan => {
  cleanUp();
  switch (appNameSpan) {
    case "game":
      return generateGame();
    case "art":
      return generateArt();
    case "grave":
      return generateGrave();
    case "notes":
      return generateNotes();
    default:
      return;
  }
};

const setDisplay = () => {
  const selectedApp = appList[0];
  appNameSpan.innerText = selectedApp.name;
  appNameSpan.style.color = selectedApp.color;
  render(selectedApp.name);
};

const appRight = () => {
  appList.push(appList.shift());
  setDisplay();
};

const appLeft = () => {
  appList.unshift(appList.pop());
  setDisplay();
};

document.querySelector(".left").addEventListener("click", appLeft);
document.querySelector(".right").addEventListener("click", appRight);

const keyDown = (e) => {
  switch (e.keyCode) {
    case 37:
      appLeft();
      break;
    case 39:
      appRight();
      break;
    default:
      break;
  }
};

document.addEventListener("keydown", keyDown);

setDisplay();
