// Horizontal effects
gsap.registerPlugin(ScrollTrigger);

const heading = document.querySelector("#page1 h1");
const page2Imgs = document.querySelector("#page2 #photos");

const paddingRight = 150;

function getScrollDistance(element) {
  return Math.max(
    0,
    element.scrollWidth - window.innerWidth + paddingRight
  );
}

// Page 1: Horizontal heading scroll
gsap.to(heading, {
  x: () => -getScrollDistance(heading),
  ease: "none",
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: () => `+=${getScrollDistance(heading)}`,
    scrub: 1,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
  },
});

// Page 2: Horizontal photos scroll
gsap.to(page2Imgs, {
  x: () => -getScrollDistance(page2Imgs),
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: () => `+=${getScrollDistance(page2Imgs)}`,
    scrub: 1,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
  },
});











// navbar effects

let lastScrollY = window.scrollY;
let hamburgerMenu = document.querySelector("#right svg");
let isMenuHidden = true;
let page1Hero = document.querySelector("#page1");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    console.log("Scroll downward");

    gsap.to("nav", {
      y: -100,
      duration: 1,
    });
  } else {
    console.log("Scroll upward");
    gsap.to("nav", {
      y: 0,
      duration: 1,
    });
  }

  lastScrollY = currentScrollY;
});

// For the nav items
const timelineForNav = gsap.timeline();
const timelineForMobileNav = gsap.timeline();

timelineForNav.from("#left", {
  y: 10,
  duration: 0.5,
  delay: 0.3,
  opacity: 0,
});

timelineForNav.from("#right ul li", {
  y: 10,
  duration: 0.5,
  opacity: 0,
  stagger: 0.1,
});

// For the mobile menu

hamburgerMenu.addEventListener("click", () => {
  isMenuHidden = false;

  gsap.to("#menubar", {
    x: -500,
    duration: 1,
  });

  timelineForMobileNav.from("#menubar ul li", {
    y: 10,
    opacity: 0,
    stagger: 0.3,
  });
});

window.addEventListener("scroll", () => {
  gsap.to("#menubar", {
    x: 100,
    duration: 3,
  });
});
page1Hero.addEventListener("click", () => {
  gsap.to("#menubar", {
    x: 100,
    duration: 3,
  });
});
