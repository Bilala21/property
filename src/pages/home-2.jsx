import dynamic from "next/dynamic";
// import Seo from "../components/common/seo";
// import Home2 from "../components/home-2";
// const Seo = dynamic(() => import('../components/common/seo'));
// const Home2 = dynamic(() => import('../components/home-2'));

const index = () => {
  return (
    <>
      {/* <Seo pageTitle="Home-2" />
      <Home2 /> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
