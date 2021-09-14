const navLinks = document.querySelectorAll(".nav__link");
const appNames = [];
let index = 0;
navLinks.forEach((navLink) => {
  appNames.push(navLink.id);
});

appNames.push("grave");

const appNameSpan = document.querySelector(".app__name");
changeAppNameSpan();

function changeAppNameSpan() {
  appNameSpan.innerText = appNames[index];
  if (appNames[index] === "grave") {
    appNameSpan.classList.add("app__name-grave");
    document.body.classList.add("app-grave")
  } else {
    appNameSpan.classList.remove("app__name-grave");
    document.body.classList.remove("app-grave")
  }
}

const appLeft = document.querySelector(".left");
const appRight = document.querySelector(".right");

appLeft.addEventListener("click", () => {
  index = (index - 1) % appNames.length;
  if (index < 0) index = appNames.length + index;
  changeAppNameSpan();
});

appRight.addEventListener("click", () => {
  index = Math.abs((index + 1) % appNames.length);
  changeAppNameSpan();
});
