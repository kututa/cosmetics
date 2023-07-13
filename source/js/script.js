// LE MENU DEROULANT

const togglebtn = document.querySelector(".entete-toggle");
console.log(togglebtn);

const ul = document.querySelector(".ul");
console.log(ul);

togglebtn.addEventListener("click", () => {
  ul.classList.toggle("active");
});

// Le caroussel

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {

  const current = document.querySelector(".current");

  //Remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //get current class
  const current = document.querySelector(".current");

  //Remove current class
  current.classList.remove("current");
  // check for previous slide
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//Auto slide
if (auto) {
  //Run next slide at intervalle time
  slideInterval = setInterval(nextSlide, intervalTime);
}


