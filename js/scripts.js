$(() => {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    navText: [
      '<span class="lnr lnr-arrow-up"></span>',
      '<span class="lnr lnr-arrow-down"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
        margin: 0,
      },
      1000: {
        items: 2,
        nav: true,
      },
    },
  });
});

let stickyTop = document.querySelector(".header-nav");
function scrolled() {
  stickyTop.classList.toggle("active", window.scrollY >= 200);
}
window.addEventListener("scroll", scrolled);

let bars = document.querySelector(".bars");
let navSite = document.querySelector(".nav-site");
let overlay = document.querySelector(".overlay-body");
bars.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    navSite.classList.add("active");
    overlay.classList.add("active");
  } else {
    navSite.classList.remove("active");
    overlay.classList.remove("active");
  }
};

window.onclick = function (e) {
  if (e.target == overlay) {
    navSite.classList.remove("active");
    overlay.classList.remove("active");
    bars.classList.remove("active");
  }
};

let counterCount = document.querySelector(".counter");
let countIncrease = document.querySelectorAll(".count");
let stopCounter = false;

function scrolledCounter() {
  if (this.scrollY >= counterCount.offsetTop - 300) {
    if (!stopCounter) countIncrease.forEach((el) => counter(el));
    stopCounter = true;
  }
}
window.addEventListener("scroll", scrolledCounter);

function counter(el) {
  let getData = Number(el.getAttribute("data-count"));
  setInterval(() => {
    if (el.textContent < getData) el.textContent++;
  }, 4500 / getData);
}
