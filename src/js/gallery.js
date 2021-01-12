let counter;
let slides;
let nextBtn;
let prevBtn;

export const activateGallery = () => {
  slides = document.querySelectorAll(".slide");
  nextBtn = document.querySelector(".next-btn");
  prevBtn = document.querySelector(".prev-btn");
  counter = 0;

  slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });

  nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
  });

  prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
  });

  prevBtn.style.display = "none";
};

const carousel = () => {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
