import { hotels } from "./hotels.js";
import { displayHotelsAndPagination } from "./renderHotels.js";

let formSearch = document.querySelector(".app__nav-form");
let inputSearch = document.querySelector(".search-hotel");
const navItems = document.querySelectorAll(".app__sidebar-links-link");

const searchAddEventListener = () => {
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = inputSearch.value.toLowerCase();

    const filteredHotels = hotels.filter((hotel) => {
      return hotel.name.startsWith(value);
    });

    inputSearch.value = "";

    navItems.forEach((item) => {
      item.classList.remove("app__sidebar-links-link--active");
    });

    displayHotelsAndPagination(0, filteredHotels);
  });
};

export { searchAddEventListener };
