export const renderSpinner = () => {
  let main = document.querySelector(".app__content");

  const markup = ` <div class="spinner">
      <svg>
        <use xlink:href="img/sprite.svg#icon-loader"></use>
      </svg>
    </div>`;
  main.innerHTML = markup;
};

export const deleteSpinner = () => {
  let spinner = document.querySelector(".spinner");
  spinner.remove();
};
