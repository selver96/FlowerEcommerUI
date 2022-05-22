import { AuthActionEnum, SetUserAction, SetAuthAction, SetIsLoadingAction, SetErrorAction } from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
import AuthService from '../../../../infrastructure/service/AuthService';
import { BasketProductActionCreators } from '../basket/action-creators';


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: payload }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            localStorage.removeItem("access_token");
            localStorage.removeItem("isAuth");
             AuthService.login(username, password).then((res) => {
                localStorage.setItem("access_token", res.data.token.access);
                dispatch(BasketProductActionCreators.setBasketProduct(res.data.basket));
                localStorage.setItem("isAuth", "isAuth");
                dispatch(AuthActionCreators.setIsAuth(true));
                dispatch(AuthActionCreators.setError(''));
            }).catch(function (error) {
                dispatch(AuthActionCreators.setIsLoading(true));
                if (error.response) {
                  console.log('response', error.response.data['non_field_errors']);
                  dispatch(AuthActionCreators.setError(error.response.data['non_field_errors'][0]))
                  console.log('response', error.response.status);
                  console.log('response', error.response.headers);
                } 
              });
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(AuthActionCreators.setError(e.message))
        }
    },
    isAuth: () => async (dispatch: AppDispatch) => {
        try {
            if (localStorage.getItem('isAuth')) {
                dispatch(AuthActionCreators.setIsAuth(true));
            }
        } catch (e: any) {
            dispatch(AuthActionCreators.setError(e.message))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsAuth(false));
            localStorage.removeItem("access_token");
            localStorage.removeItem("isAuth")
        } catch (e: any) {
            dispatch(AuthActionCreators.setError(e.message))
        }
    },


};