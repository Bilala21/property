import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Seo from "../../components/common/seo";
import GridV1 from "../../components/listing-grid/grid-v1";
import { useGetCategoryProductQuery } from "../../features/products/productApi";
import { getProducts } from "../../features/products/productSlice";
const Index = () => {
  const slug = useRouter().asPath.slice(1);
  const { data, isLoading } = useGetCategoryProductQuery("property-for-sale");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(getProducts([]))
      dispatch(getProducts(data))
    }
  }, [data])
  if(!isLoading){
    return (
      <>
        <Seo pageTitle="Product Listing" />
        <GridV1 />
      </>
    );
  }
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
