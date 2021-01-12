export const showInitialContent = () => {
  let app = document.querySelector(".app__content");
  app.innerHTML = `<div class="app__content-initial">
    <p>
      Por favor busque el hotel en el que le gustaria hospedarse o
      simplemente seleccione nuestro menu de <span>HOTELES</span> para ver
      todos los que se encuentran disponibles 😃
    </p>
  </div>`;
};
