import { api } from "../api/api";

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({        
        getCategoryProduct: builder.query({
            query: (slug) => ({
                url: `/${slug}`,
                method: "GET",
            }),
        }),
    }),
});

export const { 
    useGetCategoryProductQuery
} = productApi;
