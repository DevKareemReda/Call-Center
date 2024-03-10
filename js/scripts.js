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
  new WOW().init();
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

let allLinks = document.querySelectorAll("ul li a.link-to");
let block = document.querySelectorAll(".block");
allLinks.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    allLinks.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
    scrollToElement(this);
  };
});

function toggleClass() {
  block.forEach((el) => {
    if (window.scrollY >= el.offsetTop) {
      allLinks.forEach((el) => {
        el.classList.remove("active");
      });
      document
        .querySelector("ul.menu li a[data-scroll=" + el.id + "]")
        .classList.add("active");
    }
  });
}
window.addEventListener("scroll", toggleClass);
let allMobileLinks = document.querySelectorAll(".nav-site ul li a.link-to");
allMobileLinks.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    allMobileLinks.forEach((el) => el.classList.remove("activeMobile"));
    this.classList.add("activeMobile");
    scrollToElement(el);
  };
});

function toggleClassMobile() {
  block.forEach((el) => {
    if (window.scrollY >= el.offsetTop) {
      allMobileLinks.forEach((el) => {
        el.classList.remove("activeMobile");
      });
      document
        .querySelector(".nav-site ul li a[data-scroll=" + el.id + "]")
        .classList.add("activeMobile");
    }
  });
}
window.addEventListener("scroll", toggleClassMobile);

// scroll to element when click on link
function scrollToElement(el) {
  let goScroll = document.querySelector(
    "#" + el.getAttribute("data-scroll")
  ).offsetTop;
  scrollTo({
    top: goScroll,
    behavior: "smooth",
  });
}

let counterCount = document.querySelector(".counter");
let countIncrease = document.querySelectorAll(".count");
let stopCounter = false;

function scrolledCounter() {
  if (this.scrollY >= counterCount.offsetTop - 350) {
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

let goUp = document.querySelector(".up");

window.onscroll = function () {
  goUp.classList.toggle('active', this.scrollY >= 550);
}

goUp.onclick = function () {
  scrollTo ({
    top: 0,
    behavior: 'smooth'
  })
}

let copyRight = document.querySelector(".copy-right span");
copyRight.innerHTML = new Date().getFullYear()
