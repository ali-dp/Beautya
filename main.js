const hambergerMenu = document.querySelector(".hamberger-menu");
const navItem = document.querySelector(".nav-item");
const menuItem = document.querySelector(".menu-item");
const desknav = document.querySelector(".desktop-nav");
const heroHeader = document.querySelectorAll(".hero-header");
const heroDescription = document.querySelectorAll(".hero-description");
hambergerMenu.addEventListener("click", hambergerMenuItem);

function hambergerMenuItem() {
  if (hambergerMenu.className != "cross") {
    hambergerMenu.src = "assets/images/Vector.svg";
    hambergerMenu.className = "cross";
    menuItem.appendChild(navItem);
    navItem.classList.add("ul-item");
    menuItem.style.display = "flex";
  } else {
    hambergerMenu.src = "assets/images/menu.svg";
    menuItem.style.display = "none";
    hambergerMenu.classList = "hamberger-menu";
    desknav.appendChild(navItem);
    navItem.classList.remove("ul-item");
  }
}
// if (window.screen.width <= 1024) {
//   heroHeader.forEach((item) => {
//     item.innerText = "Beautya Prestige la Mousse Micellaire";
//   });
//   heroDescription.forEach((item) => {
//     item.innerText = "Anti-Aging Face Serum, with Purifying French Water Lily";
//   });
// }
