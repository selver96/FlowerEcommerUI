import $api from "../api";

export default class ProfileService {

    static async addFavoriteProducts() {
        return await $api.post('/api/add-favorite-product/');
    }

    static async getFavoriteProducts() {
        return await $api.get('/api/favorite-product/');
    }

    static async getOrders() {
        return await $api.get('api/orders/');
    }

}