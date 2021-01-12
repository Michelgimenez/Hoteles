import { renderSpinner, deleteSpinner } from "./spinner.js";
import { rentals } from "./rentals.js";

let content = document.querySelector(".app__content");

export const displayRentals = () => {
  content.innerHTML = "";

  renderSpinner();

  let markUp = rentals
    .map((rental) => {
      return `<div class="app__rentals-rental">
    <img src="./img/${rental.images[0]}.jpg" alt="">
  <img src="./img/${rental.images[1]}.jpg" alt="">
  <img src="./img/${rental.images[2]}.jpg" alt="">
  <div class="app__rentals-rental-details">
    <h2>${rental.name.toUpperCase()}</h2>
    <div class="app__rentals-rental-details-price">
      <p>$ ${rental.price}  <span>/hora</span></p>
    </div>
  </div>
  
  <div class="app__rentals-rental-details-tag">
   ${
     rental.tag === "airplane"
       ? `<ion-icon name="airplane-outline"></ion-icon>`
       : `<ion-icon name="car-sport-outline"></ion-icon>`
   }
  </div>
    </div>`;
    })
    .join("");

  setTimeout(() => {
    deleteSpinner();
    content.innerHTML = `<div class="app__rentals">
    ${markUp}
    </div>`;
  }, 1000);
};
