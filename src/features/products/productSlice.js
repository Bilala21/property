import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsData:{
        
    },
    search_query:{}
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.productsData = action.payload;
        },
        setFilterQuery: (state, action) => {
            state.search_query = action.payload;
        }
    },
});

export const {
    getProducts,
    setFilterQuery
} = productSlice.actions;
export default productSlice.reducer;
