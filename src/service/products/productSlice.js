import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsData:[]
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.productsData = action.payload;
        }
    },
});

export const {
    getProducts
} = productSlice.actions;
export default productSlice.reducer;
