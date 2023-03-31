import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import Seo from "../components/common/seo";
import { useGetProductQuery } from "../features/properties/productApi";
import { getProducts } from "../features/products/productSlice";
// import Home from "./home-5"
const Home = dynamic(() => import('./home-5'));
const Seo = dynamic(() => import('../components/common/seo'));

const Index = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductQuery();
  // console.log(data);
  useEffect(() => {
    if (!isLoading) {
      dispatch(getProducts(data))
    }
  }, [isLoading])
  if (!isLoading) {
    ;
    return (
      <>
        <Seo pageTitle="Home" />
        <Home />
      </>
    )
  }
};
export default dynamic(() => Promise.resolve(Index), { ssr: true });



