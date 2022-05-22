import { ProductAction, ProductActionEnum, ProductState } from './types';
import { IProduct, IProductDetail, IProductFeatures } from '../../../models/IProduct';

const initialState: ProductState = {
    product: [] as unknown as IProduct[],
    productDetail: '' as unknown as IProductDetail,
    categoryProduct: '' as unknown as IProductFeatures,
    favorite: [] as unknown as IProduct[],
    isLoading: false,
    error: '',
}

export default function productReducer(state = initialState, action: ProductAction): ProductState {
    switch (action.type) {
        case ProductActionEnum.SET_PRODUCT:
            return { ...state, product: action.payload }
        case ProductActionEnum.SET_FAVORITE_PRODUCT:
            return { ...state, favorite: action.payload }
        case ProductActionEnum.SET_PRODUCT_DETAIL:
            return { ...state, productDetail: action.payload }
        case ProductActionEnum.SET_PRODUCT_FEATURES:
            console.log(action.payload)
            return { ...state, categoryProduct: action.payload }
        case ProductActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case ProductActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    }
} 