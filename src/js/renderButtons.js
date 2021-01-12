export const renderButtons = (container, pages, activeIndex) => {
  let buttons = pages.map((page, index) => {
    return ` <button class="page-btn ${
      activeIndex === index ? "active-btn" : "null"
    }" data-index=${index}>${index + 1}</button>`;
  });

  buttons.push(
    ` <button class="next-button"><ion-icon name="chevron-forward-outline"></ion-icon></button>`
  );

  buttons.unshift(
    ` 
      <button class="prev-button"><ion-icon name="chevron-back-outline"></ion-icon></button>
     `
  );

  container.innerHTML = buttons.join("");
};
