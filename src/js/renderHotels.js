import { paginate, addEventListenersInPagination } from "./paginate.js";
import { renderSpinner, deleteSpinner } from "./spinner.js";
import { renderButtons } from "./renderButtons.js";
import { activateGallery } from "./gallery.js";
import { activateTestimonies } from "./testimonies.js";
import { activateBookmark } from "./bookmark.js";
import { hotels } from "./hotels.js";
import { initiateBookmarks } from "./state.js";

let initialApp = document.querySelector(".app__content");
let hotelsContainer;
let buttonsContainer;
let index = 0;
let pages = [];
pages = paginate(hotels);

export const displayHotelInformation = (hotel) => {
  renderSpinner();

  const markUp = `<div class="app__content-gallery slider" data-id=${hotel.id}>
  <ion-icon name="chevron-forward-outline" class="next-btn"></ion-icon>
  <figure class="slide">
    <img src="./img/${hotel.images[0]}.jpg" alt="" />
  </figure>
  <figure class="slide">
    <img src="./img/${hotel.images[1]}.jpg" alt="" />
  </figure>
  <figure class="slide">
    <img src="./img/${hotel.images[2]}.jpg" alt="" />
  </figure>
  <ion-icon name="chevron-back-outline" class="prev-btn"></ion-icon>
</div>

<div class="app__content-details">
  <div class="app__content-details-name">
    <h2>${hotel.name}</h2>
    <div class="app__content-details-name-stars">
      ${
        hotel.rating > 9
          ? `<svg class="overview__icon-star">
      <use xlink:href="img/sprite.svg#icon-star"></use>
    </svg>
    <svg class="overview__icon-star">
      <use xlink:href="img/sprite.svg#icon-star"></use>
    </svg>
    <svg class="overview__icon-star">
      <use xlink:href="img/sprite.svg#icon-star"></use>
    </svg>
    <svg class="overview__icon-star">
      <use xlink:href="img/sprite.svg#icon-star"></use>
    </svg>
    <svg class="overview__icon-star">
      <use xlink:href="img/sprite.svg#icon-star"></use>
    </svg>`
          : hotel.rating < 9 && hotel.rating > 7
          ? `<svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>
  <svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>
  <svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>
  <svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>`
          : hotel.rating < 7 && hotel.rating > 5
          ? `<svg class="overview__icon-star">
  <use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
  <use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
  <use xlink:href="img/sprite.svg#icon-star"></use>
</svg>`
          : hotel.rating < 5 && hotel.rating > 3
          ? `<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>`
          : hotel.rating < 3
          ? `<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>`
          : ""
      }
    </div>
  </div>
  <div class="app__content-details-bookmark">
  <svg >
  <use xlink:href="./img/sprite.svg#icon-bookmarked" class="favorite"></use>
</svg>
  </div>
  <div class="app__content-details-location">
    <div class="app__content-details-location-details">
      <svg class="overview__icon-location">
        <use xlink:href="img/sprite.svg#icon-location-pin"></use>
      </svg>
      <a href="#" class="location-name">${hotel.location}</a>
    </div>
    <div class="app__content-details-location-votes">
      <h3>${hotel.rating}</h3>
      <p>${hotel.votes} VOTOS</p>
    </div>
  </div>
</div>

<div class="app__content-hotel">
  <div class="app__content-hotel-details">
    <div class="app__content-hotel-details-description">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        nisi dignissimos debitis ratione sapiente saepe. Accusantium
        cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        nisi dignissimos debitis ratione sapiente saepe. Accusantium
        cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate.
      </p>
    </div>

    <div class="line"></div>
    <div class="app__content-hotel-details-features">
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Cerca de
        la playa
      </div>
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Viaje
        gratis al aeropuerto
      </div>
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Desayuno
        incluido
      </div>
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Wi-fi
        gratuito
      </div>
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Mascotas
        permitidas
      </div>
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Perfecto
        para familias
      </div>
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Vista al
        mar
      </div>
      <div class="feature">
        <ion-icon name="chevron-forward-outline"> </ion-icon> Aire
        acondicionado
      </div>
    </div>

    <div class="line"></div>
    <div class="app__content-hotel-details-recommend">
      <p>Michel y otras 3 personas recomiendan este hotel</p>
      <div class="recommend-friends">
        <img
          src="img/user-3.jpg"
          alt="photo"
          class="recommend__photo"
        />
        <img
          src="img/user-4.jpg"
          alt="photo"
          class="recommend__photo"
        />
        <img
          src="img/user-5.jpg"
          alt="photo"
          class="recommend__photo"
        />
        <img
          src="img/user-6.jpg"
          alt="photo"
          class="recommend__photo"
        />
      </div>
    </div>
  </div>

  <div class="app__content-hotel-reviews">
    ${hotel.testimonies
      .map((testimonie) => {
        return `<div class="app__content-hotel-reviews-review active">
      <p>
        ${testimonie.description}
      </p>

      <div class="app__content-hotel-reviews-review-details">
        <img src="img/${testimonie.image}" alt="" />
        <div class="app__content-hotel-reviews-review-details-user">
          <h3> ${testimonie.name}</h3>
          <p>Sept 23, 2020</p>
        </div>
        <div class="app__content-hotel-reviews-review-details-rating">
          <p> ${testimonie.rating}</p>
        </div>
      </div>
    </div>`;
      })
      .slice(0, 2)
      .join("")}
    
    <div class="app__content-hotel-reviews-change">
      <ion-icon
        name="chevron-back-outline"
        class="previous-review"
      ></ion-icon>
      <ion-icon
        name="chevron-forward-outline"
        class="next-review"
      ></ion-icon>
    </div>
  </div>
</div>

<div class="app__content-cta">
  <button class="btn">
    <span class="btn__visible">RESERVAR AHORA</span>
    <span class="btn__invisible">4 HABITACIONES DISPONIBLES</span>
  </button>
</div>`;

  setTimeout(() => {
    deleteSpinner();
    initialApp.innerHTML = markUp;
    activateGallery();
    activateTestimonies(hotel.testimonies);
    initiateBookmarks();
    activateBookmark(hotel);
  }, 1000);
};

export const addEventListenersInHotels = () => {
  window.addEventListener("hashchange", (e) => {
    const hash = Number(window.location.hash.slice(1));

    const hotelDetails = hotels.filter((hotel) => {
      return hotel.id === hash;
    });

    initialApp.innerHTML = "";

    displayHotelInformation(hotelDetails[0]);
  });
};

export const renderHotels = (hotels) => {
  let hotelsPerPage = hotels
    .map((hotel) => {
      return `<a href="#${hotel.id}" class="app__hotels-hotel dataset-id=${
        hotel.id
      }">
  <img src="./img/${hotel.images[0]}.jpg" alt="">
  <img src="./img/${hotel.images[1]}.jpg" alt="">
  <img src="./img/${hotel.images[2]}.jpg" alt="">
  <div class="app__hotels-hotel-details">
    <h2>${hotel.name.toUpperCase()}</h2>
    <div class="app__hotels-hotel-details-location">
      <svg>
        <use xlink:href="img/sprite.svg#icon-location-pin"></use>
      </svg>
      <p href="#">${hotel.location}</p>
    </div>
    <div class="app__hotels-hotel-details-stars">
      ${
        hotel.rating > 9
          ? `<svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>
  <svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>
  <svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>
  <svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>
  <svg class="overview__icon-star">
    <use xlink:href="img/sprite.svg#icon-star"></use>
  </svg>`
          : hotel.rating < 9 && hotel.rating > 7
          ? `<svg class="overview__icon-star">
  <use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
  <use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
  <use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
  <use xlink:href="img/sprite.svg#icon-star"></use>
</svg>`
          : hotel.rating < 7 && hotel.rating > 5
          ? `<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>`
          : hotel.rating < 5 && hotel.rating > 3
          ? `<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>
<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>`
          : hotel.rating < 3
          ? `<svg class="overview__icon-star">
<use xlink:href="img/sprite.svg#icon-star"></use>
</svg>`
          : ""
      }
    </div>
  </div>
  
  <div class="app__content-details-location-votes">
    <h3>${hotel.rating}</h3>
    <p>${hotel.votes} VOTOS</p>
  </div>
  </a>
  `;
    })
    .join("");

  return `<div class="app__hotels">
      ${hotelsPerPage}
      <div class="app__hotels-pagination">
      <div class="app__hotels-pagination-buttons"></div>
      </div> 
      </div>`;
};

export const displayHotelsAndPagination = (index = 0, filteredHotels) => {
  initialApp.innerHTML = "";

  renderSpinner();

  pages = paginate(filteredHotels ? filteredHotels : hotels);

  if (pages.length === 0) {
    setTimeout(() => {
      deleteSpinner();
      let markUp = `<div class="not-found">
    <p>No se pudo encontrar ningun hotel con ese nombre...</p>
    </div>`;

      initialApp.innerHTML = markUp;
    }, 1000);

    return;
  }

  let markUp = renderHotels(pages[index]);

  setTimeout(() => {
    deleteSpinner();
    initialApp.innerHTML = markUp;
    buttonsContainer = document.querySelector(
      ".app__hotels-pagination-buttons"
    );
    renderButtons(buttonsContainer, pages, index);
  }, 1000);

  setTimeout(() => {
    addEventListenersInPagination(buttonsContainer, index, pages);
    hotelsContainer = document.querySelector(".app__hotels");
    addEventListenersInHotels(hotelsContainer);
  }, 1100);
};
