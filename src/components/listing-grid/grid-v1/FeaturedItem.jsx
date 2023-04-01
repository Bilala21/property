import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";

const FeaturedItem = () => {
  const { productsData, search_query } = useSelector(state => state.products);
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item.title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.location.toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  const statusHandler = (item) =>
    item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item.price < price?.max && item.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.itemDetails[1].number == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.itemDetails[0].number == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item.featured === featured;
    }
    return true;
  };
  // ?.slice(0, 10)
  // ?.filter(keywordHandler)
  // ?.filter(locationHandler)
  // ?.filter(statusHandler)
  // ?.filter(propertiesHandler)
  // ?.filter(priceHandler)
  // ?.filter(bathroomHandler)
  // ?.filter(bedroomHandler)
  // ?.filter(garagesHandler)
  // ?.filter(builtYearsHandler)
  // ?.filter(areaHandler)
  // ?.filter(advanceHandler)
  // ?.sort(statusTypeHandler)
  // ?.filter(featuredHandler)
  // status handler
  const postTime = (item) => {
    const postedDate = Math.round(new Date().getTime() / (1000 * 60) - new Date(item).getTime() / (1000 * 60));
    if (postedDate < 59) {
      return postedDate + " Min ago"
    }
    if ((postedDate / 60) < 24) {
      return Math.round(postedDate / 60) + " Hrs ago"
    }
    if ((postedDate / 60) >= 24 && (postedDate / 60) < 168) {
      return Math.round(postedDate / 60) + " Days ago"
    }
    if ((postedDate / 60) >= 168 && (postedDate / 60) < 730) {
      return Math.round(postedDate / 60) + " Week ago"
    }
    if ((postedDate / 60) >= 760 && (postedDate / 60) < 8760) {
      return Math.round(postedDate / 60) + " Months ago"
    }
    if ((postedDate / 60) >= 8760) {
      return Math.round(postedDate / 525600) + " Years ago"
    }
  }

  if (Object.keys(productsData).length) {
    let data = [...productsData.products];
    productsData.products.filter(item => {
      Object.keys(search_query).filter(index => {
        data = [];
        if (Array.isArray(search_query[index])) {
          if (search_query[index].toString() === item[index].toString()) {
            data.push(item)
          }
          else {
            data = [];
          }
        }
        else if (item[index].toLowerCase() === search_query[index].toLowerCase()) {
          data.push(item)
        }
      })
    });

    console.log(data, "data");

    let content = data?.map((item) => (
      <div
        className={`${isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
          } `}
        key={item._id}
      >
        <div
          className={`feat_property home7 style4 ${isGridOrList ? "d-flex align-items-center" : undefined
            }`}
        >
          <div className="thumb">
            <img className="img-whp" src={"/uploads/" + item.images[0]} alt={item} />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.featured}
                  </a>
                </li>
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link href={`/listing-details-v1/${item._id}`}>
                <a className="fp_price">
                  ${item.price}
                  <small>/mo</small>
                </a>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type}</p>
              <h4>
                <Link href={`/listing-details-v1/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location}
              </p>

              <ul className="prop_details mb0">
                <li className="list-inline-item">
                  <a href="#">
                    Beds: {item.bedrooms}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    Baths: {item.bathrooms}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    SqFt: {item.size}
                  </a>
                </li>
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer d-flex align-items-center justify-content-between">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  {/* <Link href="/agent-v2">
                    <a>
                      <img src={item.posterAvatar} alt="pposter1.png" />
                    </a>
                  </Link> */}
                </li>
                <li className="list-inline-item">

                  <Link href="/agent-v2">
                    <a>PostedBy {item.PostedBy.name}</a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end m-0">
                {
                  postTime(item.createdAt)
                }
              </div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

    return <>{content}</>;
  }
};

export default FeaturedItem;
