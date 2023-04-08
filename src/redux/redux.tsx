import { createAction, createReducer, configureStore } from '@reduxjs/toolkit'

export const addToCart = createAction<{ productId: string; quantity: number}>(
    'cart/addToCart'
)

interface CartItem {
    productId: number;
    quantity: number;
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
        const {productId, quantity} = action.payload;
        const existingItemIndex = state.items.findIndex((item) => item.productId === productId)
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += quantity;
                state.total++
            } else {
                state.items.push({productId, quantity});
                state.total++
            }
    })
})

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default cartReducer;