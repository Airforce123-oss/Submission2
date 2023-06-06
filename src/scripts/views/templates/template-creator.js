import CONFIG from "../../globals/config";

const renderRestaurantsDetailTemplate = (restaurant, foods, beverages, review) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant-info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="menus">
    <h3>Makanan</h3>
    <p>${foods}</p>
    <br>
    <h3>Minuman</h3>
    <p>${beverages}</p>
    <br>
    <h3>Review Pelanggan</h3>
    <p>${review}</p>
  </div>
`;

const renderRestaurants = (restaurant) => `
  <div class="list-item">
    <div class="header-item">
      <img class="thumb-list"   src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="city">${restaurant.city}</div>
      <div class="item-content">
      <p class="item-rating"> ⭐️Rating:  <a href="#" class="item-rating-value"> ${restaurant.rating}</a></p>
      <h1 class="item-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <div class="desc-list">${restaurant.description}...</div>
      </div>
    </div>
`;

const renderLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const renderLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    renderRestaurantsDetailTemplate,
    renderRestaurants,
    renderLikeButtonTemplate,
    renderLikedButtonTemplate,
};