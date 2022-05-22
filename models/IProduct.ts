export interface IProduct {
    id: number;
    title: string;
    price: number;
    image_path: string;
    discount?: number; 
    is_favorite?: boolean;
}

export interface IProductDetail {
    id: number;
    title: string;
    product_code: string;
    stock_quantity: number;
    price: number;
    description: string;
    summary: string;
    images: string[];
    ratting: number; 
    discount?: number; 
}

export interface IProductFeatures {
    product: IProduct[];
    features: IFeatures[];
}

export interface IFeatures {
    title: string;
    data: string[];
}