export interface IBasket{
    basket_id: number;
    billing_address?: IBasketAddress;
    basket_product: IBasketProduct[];
}

export interface IBasketAddress{
    is_billing?: boolean;
    surname_name: string;
    phone_number: string;
    city: string;
    region: string;
    address: string;
    company_name?: string;
    tax_number?: string;
    tax_administration?: string;
}

export interface IBasketProduct{
    id: number;
    product_id: number;
    title: string;
    images: string;
    price: number;
    discounts?: number;
    send_date: string;
    send_time: string;
    delivery_address?: IBasketAddress;
    note?: INote
}

interface INote{
    text: string;
    person_info: string;
}

export interface IBasketAddProduct{
    product_id: number;
    send_date: string;
    send_time: string;
}

export interface IOrderAddress{
    surname_name: string;
    city: string;
    region: string;
    address: string;
}

export interface IOrder{
    id: number;
    status: string;
    product_id: number;
    title: string;
    image: string;
    price: number;
    product_code: string;
    delivery_address: IOrderAddress;
}

