import { api } from "../api/api";

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => ({
                url: "http://localhost:3000/api",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetProductQuery } = productApi;
