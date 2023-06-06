import FavoriteResto from '../data/favorite-resto';
import { renderLikeButtonTemplate, renderLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
    async init({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;
 
        await this._renderButton();
    },  

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        } 
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteResto.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = renderLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async() => {
            await FavoriteResto.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = renderLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async() => {
            await FavoriteResto.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButtonInitiator;