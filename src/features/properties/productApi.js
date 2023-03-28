import { api } from "../api/api";

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => ({
                url: "/",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetProductQuery } = productApi;
