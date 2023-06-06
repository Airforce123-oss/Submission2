import UrlParser from "../../routes/url-parser";
import RestoSourceDb from "../../data/resto-source-db";
import { renderRestaurantsDetailTemplate, renderLikeButtonTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render() {
        return `
      <div class="container-detail">
      <a href="#maincontent" class="skip-link">Skip ke konten utama</a>
        <div id="exp-resto" class="exp-resto"></div>
        <div id="likeButtonContainer"></div> 
      </div>
    `; 
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestoSourceDb.detailRestaurants(url.id);
        const restaurantContainer = document.querySelector("#exp-resto");
        const foods = await RestoSourceDb.foodList();
        const beverages = await RestoSourceDb.beverageList();
        const reviews = await RestoSourceDb.customerReviews();
        restaurantContainer.innerHTML =  renderRestaurantsDetailTemplate(restaurant.restaurant, foods, beverages, reviews);

        const likeButtonContainer = document.querySelector('#likeButtonContainer');
        likeButtonContainer.innerHTML = renderLikeButtonTemplate();
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: restaurant.restaurant,
        });
    },
};

export default Detail;