import { state } from "./state.js";
import { initiateBookmarks } from "./state.js";

export const activateBookmark = (hotel) => {
  const bookmarkContainer = document.querySelector(
    ".app__content-details-bookmark"
  );

  const bookmarkIcon = document.querySelector(".favorite");

  // Al renderizarse la informacion del hotel lo primero que quiero es saber si este hotel esta como favorito o no para renderizar un icono u otro.
  let bookmarked;

  bookmarked = state.bookmarks.filter((bookmark) => {
    return bookmark.id === hotel.id;
  });

  if (bookmarked.length === 0) {
    bookmarkIcon.setAttribute("xlink:href", "./img/sprite.svg#icon-bookmarked");
    initiateBookmarks();
  }

  if (bookmarked.length > 0) {
    bookmarkIcon.setAttribute(
      "xlink:href",
      "./img/sprite.svg#icon-bookmark-fill"
    );
    initiateBookmarks();
  }

  state.hotel = hotel;

  bookmarkContainer.addEventListener("click", (e) => {
    bookmarked = state.bookmarks.filter((bookmark) => {
      return bookmark.id === hotel.id;
    });

    // Agrego el item a bookmarks del state y localStorage en caso de que no este agregado
    if (bookmarked.length === 0) {
      state.bookmarks.push(hotel);
      bookmarkIcon.setAttribute(
        "xlink:href",
        "./img/sprite.svg#icon-bookmark-fill"
      );
      updateBookmarks();
    }

    // En caso de que ya este agregado a bookmarks, procedo a eliminarlo del localstorage y del state
    if (bookmarked.length > 0) {
      const index = state.bookmarks.findIndex(
        (hotelbookmarked) => hotelbookmarked.id === hotel.id
      );

      state.bookmarks.splice(index, 1);

      if (hotel.id === state.hotel.id) state.hotel.bookmarked = false;

      bookmarkIcon.setAttribute(
        "xlink:href",
        "./img/sprite.svg#icon-bookmarked"
      );

      updateBookmarks();
    }
  });
};

const updateBookmarks = () => {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
  initiateBookmarks();
};
