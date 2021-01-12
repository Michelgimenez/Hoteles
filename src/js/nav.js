import { displayHotelsAndPagination } from "./renderHotels.js";
import { displayRentals } from "./renderRentals.js";

const linksContainer = document.querySelector(".app__sidebar-links");
const navItems = document.querySelectorAll(".app__sidebar-links-link");

export const initiateNavEventListeners = () => {
  linksContainer.addEventListener("click", (e) => {
    navItems.forEach((item) => {
      item.classList.remove("app__sidebar-links-link--active");
    });

    if (e.target.classList.contains("hotels")) {
      displayHotelsAndPagination();
      e.target
        .closest(".app__sidebar-links-link")
        .classList.add("app__sidebar-links-link--active");
    }

    if (e.target.classList.contains("rentals")) {
      displayRentals();
      e.target
        .closest(".app__sidebar-links-link")
        .classList.add("app__sidebar-links-link--active");
    }
  });
};
