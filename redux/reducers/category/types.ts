import { ICategory, ICategoriesURL } from '../../../models/ICategory';

export interface CategoryState {
    category: ICategory[];
    categoryUrl: ICategoriesURL[];
    isLoading: boolean;
    error: string;
}

export enum CategoryActionEnum {
    SET_CATEGORY = "SET_CATEGORY",
    SET_CATEGORY_URL = 'SET_CATEGORY_URL',
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetErrorAction {
    type: CategoryActionEnum.SET_ERROR,
    payload: string
}

export interface SetCategoryAction {
    type: CategoryActionEnum.SET_CATEGORY,
    payload: ICategory[]
}


export interface SetCategoryUrlAction {
    type: CategoryActionEnum.SET_CATEGORY_URL,
    payload: ICategoriesURL[]
}

export interface SetIsLoadingAction {
    type: CategoryActionEnum.SET_IS_LOADING,
    payload: boolean
}

export type CategoryAction =
    SetErrorAction |
    SetCategoryAction |
    SetCategoryUrlAction |
    SetIsLoadingAction;
