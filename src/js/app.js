import { initiateNavEventListeners } from "./nav.js";
import { showInitialContent } from "./initialContent.js";
import { searchAddEventListener } from "./search.js";
import { initiateBookmarks } from "./state.js";

const init = () => {
  showInitialContent();
  initiateNavEventListeners();
  searchAddEventListener();
  initiateBookmarks();
};

window.addEventListener("load", init);
