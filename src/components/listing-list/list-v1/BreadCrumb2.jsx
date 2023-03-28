import BreadCrumb from "../../common/BreadCrumb";

const BreadCrumb2 = ({bread_crumb_title,current_page}) => {
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={current_page}/>
      <h2 className="breadcrumb_title">{bread_crumb_title}</h2>
    </div>
  );
};

export default BreadCrumb2;
