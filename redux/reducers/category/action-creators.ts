import { CategoryActionEnum, SetCategoryAction, SetIsLoadingAction, SetErrorAction, SetCategoryUrlAction } from './types';
import { ICategory, ICategoriesURL } from '../../../models/ICategory';
import { AppDispatch } from '../../index';
import CategoryService from '../../../service/CategoryService';


export const CategoryActionCreators = {
    setCategory: (category: ICategory[] ): SetCategoryAction => ({ type: CategoryActionEnum.SET_CATEGORY, payload: category }),
    setUrls: (categoryUrls: ICategoriesURL[] ): SetCategoryUrlAction => ({ type: CategoryActionEnum.SET_CATEGORY_URL, payload: categoryUrls }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: CategoryActionEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: CategoryActionEnum.SET_ERROR, payload: payload }),
    getCategories: () => (dispatch: AppDispatch) => {
        try {
            dispatch(CategoryActionCreators.setIsLoading(true));
            CategoryService.getCategories().then((res) => {
                dispatch(CategoryActionCreators.setCategory(res.data))
            });
            dispatch(CategoryActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(CategoryActionCreators.setError(''));
        }
    }
};