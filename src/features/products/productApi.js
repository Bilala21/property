import { api } from "../api/api";

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({            
            query: () => ({
                url: "/",
                method: "GET",
            }),
        }),
        getCategoryProduct: builder.query({            
            query: (slug) => ({
                url: `/?${slug}`,
                method: "GET",
            }),
        }),
       
    }),
});

export const { useGetProductQuery, useGetCategoryProductQuery} = productApi;
