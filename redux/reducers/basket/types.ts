import { IBasket, IOrder } from '../../../models/IBasket';

export interface BasketState {
    basket: IBasket;
    order: IOrder[];
    isLoading: boolean;
    error: string;
}

export enum BasketActionEnum {
    SET_BASKET_PRODUCT = "SET_BASKET_PRODUCT",
    SET_ORDER_PRODUCT='SET_ORDER_PRODUCT',
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetOrderProductAction {
    type: BasketActionEnum.SET_ORDER_PRODUCT,
    payload: IOrder[]
}

export interface SetBasketProductAction {
    type: BasketActionEnum.SET_BASKET_PRODUCT,
    payload: IBasket
}

export interface SetErrorAction {
    type: BasketActionEnum.SET_ERROR,
    payload: string
}

export interface SetIsLoadingAction {
    type: BasketActionEnum.SET_IS_LOADING,
    payload: boolean
}

export type BasketAction =
    SetErrorAction |
    SetOrderProductAction |
    SetBasketProductAction |
    SetIsLoadingAction;
