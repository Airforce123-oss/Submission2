/* eslint-disable no-undef */
import RestoSourceDb from "../../data/resto-source-db";
import { renderRestaurants } from "../templates/template-creator";

const Home = {
    async render() {
        return `  <div class="hero">
        <div class="heroInner">
          <h2 class="heroTitle">Find your Best Restaurant</h1>
          <p class="heroTagline">Rasakan pengalaman makan makanan dari seluruh dunia</p>
        </div>
      </div>
       <section class="content">
      <div class="exp-content">
        <h1>Explore Restaurant</h1>
        <div class="exp-resto" id="exp-resto"></div>
      </div>
    </section>
    `;
    },

    async afterRender() {
        const restaurants = await RestoSourceDb.restaurants();
        const restaurantsContainer = document.querySelector("#exp-resto");
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
            renderRestaurants(restaurant);
        });
    },
};

export default Home;