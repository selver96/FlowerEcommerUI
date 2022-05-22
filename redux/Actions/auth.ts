import { IUser } from '../../models/IUser';
import { AuthAction, AuthActionEnum } from '../reducers/auth/types';

export function setUser(user: IUser): AuthAction {
    return { type: AuthActionEnum.SET_USER, payload: user }
}

export function setIsAuth(payload: boolean): AuthAction {
    return { type: AuthActionEnum.SET_AUTH, payload: payload }
}

export function setIsLoading(payload: boolean): AuthAction {
    return { type: AuthActionEnum.SET_IS_LOADING, payload: payload }
}

export function setError(payload: string): AuthAction {
    return { type: AuthActionEnum.SET_ERROR, payload: payload }
}