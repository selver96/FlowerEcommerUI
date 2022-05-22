import $api from "../api";

export default class OrderService {

    static async getOrderProduct() {
        return await $api.get('api/get-order/');
    }

    static async createOrder() {
        return await $api.post('api/create-order/');
    }
}