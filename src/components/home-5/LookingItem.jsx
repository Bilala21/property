import Link from "next/link";
import { useSelector } from "react-redux";
import find from "../../data/find";

const LookingItem = () => {
  const {productsData} = useSelector(state =>state.products)
  const{categories}=productsData.products;
  console.log(categories);
  return (
    <>
      {categories?.map((item) => (
        <li className="list-inline-item" key={item._id}>
          <div className="icon_home5">
            <div className="icon">
              <Link href={item.slug}>
                <a>
                  <span className={"flaticon-house-1"}></span>
                  <p>{item.name}</p>
                </a>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default LookingItem;
