import { BasketAction, BasketActionEnum, BasketState } from '../basket/types';
import { IBasket, IOrder } from '../../../models/IBasket';

const initialState: BasketState = {
    basket: '' as unknown as IBasket,
    order: [] as unknown as IOrder[],
    isLoading: false,
    error: '',
}

export default function basketReducer(state = initialState, action: BasketAction): BasketState {
    switch (action.type) {
        case BasketActionEnum.SET_ORDER_PRODUCT:
            return { ...state, order: action.payload }
        case BasketActionEnum.SET_BASKET_PRODUCT:
            return { ...state, basket: action.payload }
        case BasketActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case BasketActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    }
} 