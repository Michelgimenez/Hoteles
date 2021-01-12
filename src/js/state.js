export const state = {
  bookmarks: [],
  hotel: {},
};

export const initiateBookmarks = () => {
  let storage = localStorage.getItem("bookmarks");
  let iconSpan = document.querySelector(".bookmark-notification");

  if (storage) {
    state.bookmarks = JSON.parse(storage);
    iconSpan.innerHTML = `${JSON.parse(storage).length}`;
  }

  if (!storage) {
    iconSpan.innerHTML = `0`;
  }
};
