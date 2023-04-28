import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWishlistOpen: false,
    WishlistItems: [],
};

const wishlistSlice = createSlice({
    name: "wish",
    initialState,
    reducers: {
        toggleWish(state, action) {
            state.isWishlistOpen = action.payload;
        },

        addwishItem(state, action) {

            const newItemId = action.payload.id;
            
            const existingId = state.WishlistItems.find(item => item.id === newItemId);

            if (existingId) {
                state.WishlistItems = state.WishlistItems.filter(item => item.id !== action.payload.id);
            } else {
                state.WishlistItems.push(action.payload);
            }
            
        },

        removeItem(state, action) {
            state.WishlistItems = state.WishlistItems.filter(item => item.id !== action.payload);
        },
    },
});

export const { toggleWish,addwishItem,removeItem,togglewished } = wishlistSlice.actions;
export default wishlistSlice.reducer;