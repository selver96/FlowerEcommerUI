import { CategoryAction, CategoryActionEnum, CategoryState } from './types';
import { ICategory, ICategoriesURL } from '../../../models/ICategory';


const initialState: CategoryState = {
    category: [] as unknown as ICategory[],
    categoryUrl: [] as unknown as ICategoriesURL[],
    isLoading: false,
    error: '',
}

export default function categoryReducer(state = initialState, action: CategoryAction): CategoryState {
    switch (action.type) {
        case CategoryActionEnum.SET_CATEGORY:
            return { ...state, category: action.payload }
        case CategoryActionEnum.SET_CATEGORY_URL:
            return { ...state, categoryUrl: action.payload }
        case CategoryActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case CategoryActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    }
} 