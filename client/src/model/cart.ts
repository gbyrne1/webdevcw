import { computed, ref } from "vue";
import type { Product } from "./products";

const cart = ref([] as CartItem[]);

export function useCart() {
    return cart;
}

export interface CartItem {
    productId: number;
    product: Product;
    quantity: number;
}

export function removefromcart(index:number) {
    cart.value.splice(index, 1);
    
}

export function addtocart(product: Product) {
    const item = cart.value.find((item) => item.productId == product.id);
    if (item) {
        item.quantity++;
    } else {
        cart.value.push({
            productId: product.id,
            product,
            quantity: 1,
        });
    }
}

export const quantity = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0));
export const total = computed(()=> cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0))
