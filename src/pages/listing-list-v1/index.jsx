import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListV1 from "../../components/listing-list/list-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Product listing" />
      <ListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
