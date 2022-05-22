import { SetErrorAction, SetIsLoadingAction, SetProductAction, SetProductDetailAction, ProductActionEnum, SetFeaturesAction, SetFavoriteProductAction } from './types';
import { IProduct, IProductDetail, IProductFeatures } from '../../../models/IProduct';
import { AppDispatch } from '../../index';
import ProductService from '../../../../infrastructure/service/ProductService';


export const ProductActionCreators = {
    setProduct: (product: IProduct[] ): SetProductAction => 
                                        ({ type: ProductActionEnum.SET_PRODUCT, payload: product }),

    setFavoriteProduct: (product: IProduct[] ): SetFavoriteProductAction => 
                                        ({ type: ProductActionEnum.SET_FAVORITE_PRODUCT, payload: product }),

    setProductDetail: (productDetail: IProductDetail ): SetProductDetailAction => 
                                        ({ type: ProductActionEnum.SET_PRODUCT_DETAIL, payload: productDetail }),

    setCategoryProduct: (product: IProductFeatures ): SetFeaturesAction => 
                                        ({ type: ProductActionEnum.SET_PRODUCT_FEATURES, payload: product }),

    setIsLoading: (payload: boolean): SetIsLoadingAction => 
                                        ({ type: ProductActionEnum.SET_IS_LOADING, payload: payload }),

    setError: (payload: string): SetErrorAction => 
                                        ({ type: ProductActionEnum.SET_ERROR, payload: payload }),

    getProduct: () => (dispatch: AppDispatch) => {
        try {
            dispatch(ProductActionCreators.setIsLoading(true));
            ProductService.getProducts().then((res) => {
                dispatch(ProductActionCreators.setProduct(res.data))
            });
            dispatch(ProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(ProductActionCreators.setError(''));
        }
    },

    getProductByCategory: (category?: string) => (dispatch: AppDispatch) => {
        try {
            dispatch(ProductActionCreators.setIsLoading(true));
            ProductService.getProductByCategory(category).then((res) => {
                // console.log(res.data)
                dispatch(ProductActionCreators.setCategoryProduct(res.data))
            });
            dispatch(ProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(ProductActionCreators.setError(''));
        }
    },

    getProductDetail: (product_id?: number) => (dispatch: AppDispatch) => {
        
        try {
            
            dispatch(ProductActionCreators.setIsLoading(true));
            ProductService.getProductDetail(product_id).then((res) => {
                // console.log(res.data[0])
                dispatch(ProductActionCreators.setProductDetail(res.data))
            });
            dispatch(ProductActionCreators.setIsLoading(false));
        } catch (e) {
            console.log(product_id)
            dispatch(ProductActionCreators.setError(''));
        }
    },
    setProductStar: (value: number, product_id: number) => (dispatch: AppDispatch) => {
        
        try {
            dispatch(ProductActionCreators.setIsLoading(true));
            ProductService.setProductStar(value, product_id).then((res) => {
                console.log(res.data);
                dispatch(ProductActionCreators.setProductDetail(res.data))
            });
            dispatch(ProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(ProductActionCreators.setError(''));
        }
    },
    getFavoriteProduct: () => (dispatch: AppDispatch) => {
        
        try {
            dispatch(ProductActionCreators.setIsLoading(true));
            ProductService.getFavoriteProduct().then((res) => {
                dispatch(ProductActionCreators.setFavoriteProduct(res.data))
            });
            dispatch(ProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(ProductActionCreators.setError(''));
        }
    },
    addFavoriteProduct: (product_id: number) => (dispatch: AppDispatch) => {
        try {
            dispatch(ProductActionCreators.setIsLoading(true));
            ProductService.addFavoriteProduct(product_id).then((res) => {
                dispatch(ProductActionCreators.setFavoriteProduct(res.data))
            });
            dispatch(ProductActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(ProductActionCreators.setError(''));
        }
    }
};