import {ref} from 'vue';
import type { Product } from './products';
const cart=ref(([]) as CartItem[]);

export function useCart(){
    return cart;
}

export interface CartItem{
    productid:number;
    quanity:number;
    product:Product;
}