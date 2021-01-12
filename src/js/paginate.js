import { displayHotelsAndPagination } from "./renderHotels.js";

export const paginate = (hotels) => {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(hotels.length / itemsPerPage);

  const newHotels = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return hotels.slice(start, start + itemsPerPage);
  });

  return newHotels;
};

export const addEventListenersInPagination = (
  buttonsContainer,
  index,
  pages
) => {
  buttonsContainer.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("app__hotels-pagination")) {
      return;
    }

    if (e.target.classList.contains("page-btn")) {
      index = e.target.dataset.index;
    }

    if (e.target.parentElement.classList.contains("next-button")) {
      index++;

      if (index > pages.length - 1) {
        index = 0;
      }
    }
    if (e.target.parentElement.classList.contains("prev-button")) {
      index--;
      if (index < 0) {
        index = pages.length - 1;
      }
    }

    displayHotelsAndPagination(Number(index));
  });
};
