import { IBasket, IBasketAddProduct } from "../../application/models/IBasket";
import { IBillingForm } from "../../presentation/pages/Order/BillingInfoPage";
import { IDeliveryForm } from "../../presentation/pages/Order/OrderDelivery";
import { INoteForm } from "../../presentation/pages/Order/OrderNotePage";
import $api from "../api";

export default class BasketService {

    static async getBasketProduct() {
        return await $api.get<IBasket>('api/basket-product/');
    }

    static async addBasketProduct(data: IBasketAddProduct) {
        return await $api.post('api/basket-add/', data);
    }

    static async removeBasketProduct(product_id: number) {
        const params = {
            data: {
            product_id: product_id
        }}

        return await $api.delete('api/basket-remove/', params);
    }

    static async addDeliveryAddress(data: IDeliveryForm[]) {
        return await $api.post('api/add-delivery-address/', data);
    }

    static async addBillingAddress(data: IBillingForm) {
        return await $api.post('api/add-billing-address/', data);
    }

    static async addNote(data: INoteForm[]) {
        return await $api.post('api/add-note/', data);
    }
}