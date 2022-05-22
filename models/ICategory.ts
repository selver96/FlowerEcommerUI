export interface ICategory {
    id: Number;
    name: string;
    url: string;
    subcategories: ISubCategories[];
    only_subcategories: boolean;
}

export interface ISubCategories{
    id: Number;
    name: string;
    url: string;
    subcategories: ISubPlusCategories[];
}

export interface ISubPlusCategories{
    id: Number;
    name: string;
    url: string;
}

export interface ICategoriesURL{
    id: Number;
    url: string;
}