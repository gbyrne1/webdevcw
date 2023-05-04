//(default export)when importing a component dont put in squigglies{}, can be named whatever you want
//if their are named exports, this doesnt apply, use squigglies{} and exact name

import type { DataListEnvelope } from "./myFetch";
import { api } from "./session";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export function getProducts(): Promise<DataListEnvelope<Product>> {

    return api('products')

}