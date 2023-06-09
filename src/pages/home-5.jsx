import dynamic from "next/dynamic";
// import Seo from "../components/common/seo";
// import Home5 from "../components/home-5";
const Seo = dynamic(() => import('../components/common/seo'));
const Home5 = dynamic(() => import('../components/home-5'));
const index = () => {
  return (
    <>
      <Seo pageTitle="Home-5" />
      <Home5/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
