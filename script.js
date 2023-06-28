const slide = document.querySelector(".testimonial");
const previousBtn = document.querySelector(".pre");
const nextBtn = document.querySelector(".next");

let x = 0;

nextBtn.onclick = function () {
  if (x > "-350") {
    x = x - 400;
    slide.style.marginLeft = x + "px";
  }
};

previousBtn.onclick = function () {
  if (x < 0) {
    x = x + 400;
    slide.style.marginLeft = x + "px";
  }
};
