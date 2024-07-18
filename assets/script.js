const hamburger = document.querySelector(".hamburger");
const xBar = document.querySelector(".x-bar");
const nav = document.querySelector(".navbar");
const ul = document.querySelector("ul");
const mobileContent = document.querySelector(".swiper");
const desktopContent = document.querySelector(".swiper-desktop");

hamburger.addEventListener("click", () => {
  ul.style.display = "flex";
  xBar.style.display = "flex";
  hamburger.style.display = "none";
  nav.style.display = "flex";
  nav.style.height = "15rem";
  ul.style.display = "block";
});
xBar.addEventListener("click", () => {
  ul.style.display = "none";
  xBar.style.display = "none";
  hamburger.style.display = "flex";
  nav.style.height = "0rem";
  ul.style.height = "none";
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      enabled: false,
    },
    0: {
      enabled: true,
    },
  },
});
function toggleContent() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    mobileContent.style.display = "block";
    desktopContent.style.display = "none";
  } else {
    mobileContent.style.display = "none";
    desktopContent.style.display = "block";
  }
}
toggleContent();
window.addEventListener("resize", toggleContent);
