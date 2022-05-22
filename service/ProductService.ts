import $api from "../api";
import { IProduct, IProductFeatures } from '../../application/models/IProduct';

export default class ProductService {

    static async getProducts() {
        return await $api.get<IProduct[]>('/api/product/');;
    }

    static async getProductByCategory(category?: string) {
        return await $api.get<IProductFeatures>('api/product-by-category/' + category + '/');
    }

    static async getProductDetail(product_id?: number) {
        return await $api.get('api/product-detail/' + product_id + '/');
    }

    static async setProductStar(value: number, product_id: number) {
        return await $api.post('api/product-star/', { value: value, product_id: product_id });
    }

    static async getFavoriteProduct() {
        return await $api.get('api/product-favorite/');
    }

    static async addFavoriteProduct(product_id: number) {
        return await $api.post('api/add-product-favorite/', { product_id: product_id });
    }

}