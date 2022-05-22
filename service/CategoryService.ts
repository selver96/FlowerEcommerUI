import $api from "../api";


export default class CategoryService {

    static async getCategories() {
        return await $api.get('/api/categories/');
    }

    static async getUrls() {
        return await $api.get('/api/categories-urls/');
    }

}