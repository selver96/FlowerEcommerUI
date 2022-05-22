import { IProduct, IProductDetail, IProductFeatures } from '../../../models/IProduct';

export interface ProductState {
    product: IProduct[];
    productDetail: IProductDetail;
    categoryProduct: IProductFeatures;
    favorite: IProduct[];
    isLoading: boolean;
    error: string;
}

export enum ProductActionEnum {
    SET_PRODUCT = "SET_PRODUCT",
    SET_FAVORITE_PRODUCT = "SET_FAVORITE_PRODUCT",
    SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL",
    SET_PRODUCT_FEATURES = "SET_PRODUCT_FEATURES",
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetFavoriteProductAction {
    type: ProductActionEnum.SET_FAVORITE_PRODUCT,
    payload: IProduct[]
}

export interface SetProductAction {
    type: ProductActionEnum.SET_PRODUCT,
    payload: IProduct[]
}

export interface SetFeaturesAction {
    type: ProductActionEnum.SET_PRODUCT_FEATURES,
    payload: IProductFeatures
}

export interface SetProductDetailAction {
    type: ProductActionEnum.SET_PRODUCT_DETAIL,
    payload: IProductDetail
}

export interface SetErrorAction {
    type: ProductActionEnum.SET_ERROR,
    payload: string
}

export interface SetIsLoadingAction {
    type: ProductActionEnum.SET_IS_LOADING,
    payload: boolean
}

export type ProductAction =
    SetErrorAction |
    SetFavoriteProductAction |
    SetProductAction |
    SetProductDetailAction |
    SetFeaturesAction |
    SetIsLoadingAction;
