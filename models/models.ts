export interface AuthResponse{
    refresh_token: string;
    access_token: string;
}

export interface RegistrationUser{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthOfDate: Date;
    gender: string;
}

interface CharValue{
    id: number;
    value: string;
}

interface Char{
    id: number;
    name: string;
    shortCode: string;
    charValue: [CharValue];
}

export interface Item{
    id: number;
    name: string;
    stockQuantity: number;
    cost: number;
    discount: number;
    isAdditional: boolean;
    char: Char;
}

export interface ITime {
    from: string;
    to: string;
}