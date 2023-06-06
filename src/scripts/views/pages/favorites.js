import FavoriteResto from "../../data/favorite-resto";
import { renderRestaurants } from "../templates/template-creator";

const Favorites = {
    async render() {
        return `
        <a href="#maincontent" class="skip-link">Skip ke konten utama</a>
        <div class="content">
        <h2 class="content-heading">Your Liked Restaurant</h2>
        <div class="exp-resto" id="exp-resto"></div>
        </div>
    `;
    },

    async afterRender() {
        const restaurants = await FavoriteResto.getAllRestaurants();
        const restaurantsContainer = document.querySelector("#exp-resto");
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
                renderRestaurants(restaurant);
        });
    },

}
export default Favorites;