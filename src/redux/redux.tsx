import { createAction, createReducer, configureStore } from '@reduxjs/toolkit'

export const addToCart = createAction<{ productId: number; quantity: number; title: string; image: string; price: number; description: string;}>(
    'cart/addToCart'
)

export const removeFromCart = createAction<{ productId: number; quantity: number}>(
    'cart/removeFromCart'
)

interface CartItem {
    productId: number;
    quantity: number;
    title: string;
    image: string;
    price: number;
    description: string;
}

interface CartState {
    items: CartItem[];
    total: number;
}

const initialState: CartState = {
    items: [],
    total: 0,
}


const cartReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(addToCart,(state,action) => {
        const {productId, quantity, title, price, image, description} = action.payload;
        const existingItemIndex = state.items.findIndex((item) => item.productId === productId)
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += quantity;
                state.total++
            } else {
                state.items.push({productId, quantity, title, image, price, description});
                state.total++
            }
    })
    .addCase(removeFromCart,(state,action) => {
        const {productId, quantity} = action.payload;
        const existingItemIndex = state.items.findIndex((item) => item.productId === productId)
        if (existingItemIndex !== -1) {
            const itemToRemove = state.items[existingItemIndex];
            state.items.splice(existingItemIndex, 1);
            state.total -= itemToRemove.quantity
        }
    })
})

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default cartReducer;