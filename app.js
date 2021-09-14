const navLinks = document.querySelectorAll(".nav__link");
const appNames = [];
navLinks.forEach((navLink) => {
  appNames.push(navLink.id);
});

const appNameSpan = document.querySelector(".app-name");
appNameSpan.innerText = appNames[0];
