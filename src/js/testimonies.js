import { hotels } from "./hotels.js";

let testimonies;
let buttonsContainer;
let nextReview;
let previousReview;

export const activateTestimonies = (testimonies) => {
  buttonsContainer = document.querySelector(
    ".app__content-hotel-reviews-change"
  );

  previousReview = document.querySelector(".previous-review");
  nextReview = document.querySelector(".next-review");

  let activeTestimonies = document.querySelectorAll(".active");
  nextReview.classList.add("active");

  buttonsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("next-review")) {
      const nextTestimonies = testimonies.slice(2, 4);

      activeTestimonies.forEach((testimonie, i) => {
        testimonie.classList.remove("active");

        let testimonieContent = nextTestimonies[i];
        setTimeout(() => {
          testimonie.innerHTML = "";
          testimonie.innerHTML = `
            <p>
              ${testimonieContent.description}
            </p>
      
            <div class="app__content-hotel-reviews-review-details">
              <img src="img/${testimonieContent.image}" alt="" />
              <div class="app__content-hotel-reviews-review-details-user">
                <h3> ${testimonieContent.name}</h3>
                <p>Sept 23, 2020</p>
              </div>
              <div class="app__content-hotel-reviews-review-details-rating">
                <p> ${testimonieContent.rating}</p>
              </div>
            </div>
          `;
          testimonie.classList.add("active");
        }, 1000);
      });

      nextReview.classList.remove("active");
      previousReview.classList.add("active");
    }

    if (e.target.classList.contains("previous-review")) {
      const previousTestimonies = testimonies.slice(0, 2);

      activeTestimonies.forEach((testimonie, i) => {
        testimonie.classList.remove("active");

        setTimeout(() => {
          testimonie.innerHTML = "";
          let testimonieContent = previousTestimonies[i];
          testimonie.innerHTML = `
          <p>
            ${testimonieContent.description}
          </p>
    
          <div class="app__content-hotel-reviews-review-details">
            <img src="img/${testimonieContent.image}" alt="" />
            <div class="app__content-hotel-reviews-review-details-user">
              <h3> ${testimonieContent.name}</h3>
              <p>Sept 23, 2020</p>
            </div>
            <div class="app__content-hotel-reviews-review-details-rating">
              <p> ${testimonieContent.rating}</p>
            </div>
          </div>
        `;
          testimonie.classList.add("active");
        }, 1000);
      });

      nextReview.classList.add("active");
      previousReview.classList.remove("active");
    }
  });
};
