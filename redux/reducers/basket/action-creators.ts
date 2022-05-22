import { SetErrorAction, SetIsLoadingAction, SetBasketProductAction, BasketActionEnum, SetOrderProductAction,} from './types';
import { AppDispatch } from '../../index';
import { IBasket, IBasketAddProduct, IOrder } from '../../../models/IBasket';
import BasketService from '../../../../infrastructure/service/BasketService';
import { IDeliveryForm } from '../../../../presentation/pages/Order/OrderDelivery';
import { IBillingForm } from '../../../../presentation/pages/Order/BillingInfoPage';
import { INoteForm } from '../../../../presentation/pages/Order/OrderNotePage';
import OrderService from '../../../../infrastructure/service/OrderService';


export const BasketProductActionCreators = {
    setBasketProduct: (basket: IBasket ): SetBasketProductAction => 
                                        ({ type: BasketActionEnum.SET_BASKET_PRODUCT, payload: basket }),

    setOrderProduct: (order: IOrder[] ): SetOrderProductAction => 
                                        ({ type: BasketActionEnum.SET_ORDER_PRODUCT, payload: order }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => 
                                        ({ type: BasketActionEnum.SET_IS_LOADING, payload: payload }),

    setError: (payload: string): SetErrorAction => 
                                        ({ type: BasketActionEnum.SET_ERROR, payload: payload }),

    getBasketProduct: () => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            BasketService.getBasketProduct().then((res) => {
                console.log(res.data);
                dispatch(BasketProductActionCreators.setBasketProduct(res.data))
            });
            dispatch(BasketProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
    addBasketProduct: (data: IBasketAddProduct) => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            BasketService.addBasketProduct(data).then((res) => {
                dispatch(BasketProductActionCreators.setBasketProduct(res.data))
            });
            dispatch(BasketProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
    removeBasketProduct: (basketProductId: number) => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            BasketService.removeBasketProduct(basketProductId).then((res) => {
                dispatch(BasketProductActionCreators.setBasketProduct(res.data))
            });
            dispatch(BasketProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
    addDeliveryAddress: (data: IDeliveryForm[]) => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            console.log(data)
            BasketService.addDeliveryAddress(data).then((res) => {
                dispatch(BasketProductActionCreators.setBasketProduct(res.data))
                dispatch(BasketProductActionCreators.setIsLoading(false));
            }).catch((err) => {
                dispatch(BasketProductActionCreators.setIsLoading(true));
            });
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
    addBillingAddress: (data: IBillingForm) => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            BasketService.addBillingAddress(data).then((res) => {
                dispatch(BasketProductActionCreators.setBasketProduct(res.data))
                console.log(res.data)
                dispatch(BasketProductActionCreators.setIsLoading(false));
            }).catch((err) => {
                dispatch(BasketProductActionCreators.setIsLoading(true));
            });
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
    addNote: (data: INoteForm[]) => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            BasketService.addNote(data).then((res) => {
                dispatch(BasketProductActionCreators.setBasketProduct(res.data))
                console.log(res.data)
                dispatch(BasketProductActionCreators.setIsLoading(false));
            }).catch((err) => {
                dispatch(BasketProductActionCreators.setIsLoading(true));
            });
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
    getOrder: () => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            OrderService.getOrderProduct().then((res) => {
                console.log(res.data);
                dispatch(BasketProductActionCreators.setOrderProduct(res.data));
                dispatch(BasketProductActionCreators.setIsLoading(false));
            }).catch((err) => {
                dispatch(BasketProductActionCreators.setIsLoading(true));
            });
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
    createOrder: () => (dispatch: AppDispatch) => {
        try {
            dispatch(BasketProductActionCreators.setIsLoading(true));
            OrderService.createOrder().then((res) => {
                dispatch(BasketProductActionCreators.setOrderProduct(res.data))
                dispatch(BasketProductActionCreators.setIsLoading(false));
            }).catch((err) => {
                dispatch(BasketProductActionCreators.setIsLoading(true));
            });
        } catch (e) {
            dispatch(BasketProductActionCreators.setError(''));
        }
    },
};