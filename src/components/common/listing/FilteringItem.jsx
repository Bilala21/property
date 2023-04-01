import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addYearBuilt,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { setFilterQuery } from "../../../features/products/productSlice";

const FilteringItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);

  // input state
  const [getKeyword, setKeyword] = useState(keyword);
  const [getLocation, setLocation] = useState(location);
  const [getStatus, setStatus] = useState(status);
  const [getPropertiesType, setPropertiesType] = useState(propertyType);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);
  const [property_types, setPropertyType] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  // advanced state
  const [getAdvanced, setAdvanced] = useState([
    { id: uuidv4(), name: "Air Conditioning" },
    { id: uuidv4(), name: "Barbeque" },
    { id: uuidv4(), name: "Gym" },
    { id: uuidv4(), name: "Microwave" },
    { id: uuidv4(), name: "TV Cable" },
    { id: uuidv4(), name: "Lawn" },
    { id: uuidv4(), name: "Refrigerator" },
    { id: uuidv4(), name: "Swimming Pool" },
    { id: uuidv4(), name: "WiFi" },
    { id: uuidv4(), name: "Sauna" },
    { id: uuidv4(), name: "Dryer" },
    { id: uuidv4(), name: "Washer" },
    { id: uuidv4(), name: "Laundry" },
    { id: uuidv4(), name: "Outdoor Shower" },
    { id: uuidv4(), name: "Window Coverings" },
  ]);

  const dispath = useDispatch();

  const Router = useRouter();

  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, addKeyword, getKeyword]);

  // location
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, addLocation, getLocation]);

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, addStatus, getStatus]);

  // properties type
  useEffect(() => {
    dispath(addPropertyType(getPropertiesType));
  }, [dispath, addPropertyType, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, addBathrooms, getBathroom]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, addBedrooms, getBedroom]);

  // garages
  useEffect(() => {
    dispath(addGarages(getGarages));
  }, [dispath, addGarages, getGarages]);

  // built years
  useEffect(() => {
    dispath(addYearBuilt(getBuiltYear));
  }, [dispath, addYearBuilt, getBuiltYear]);

  // area min
  useEffect(() => {
    dispath(dispath(addAreaMin(getAreaMin)));
  }, [dispath, addAreaMin, getAreaMin]);

  // area max
  useEffect(() => {
    dispath(dispath(addAreaMax(getAreaMax)));
  }, [dispath, addAreaMax, getAreaMax]);

  useEffect(() => {
    dispath(setFilterQuery(searchQuery))
  }, [searchQuery])

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };

  const clearAllFilters = () => {
    setKeyword("");
    setLocation("");
    setStatus("");
    setPropertiesType("");
    dispath(addPrice({ min: 10000, max: 20000 }));
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setGarages("");
    setBuiltYear("");
    setAreaMin("");
    setAreaMax("");
    dispath(resetAmenities());
    dispath(addStatusType(""));
    dispath(addFeatured(""));
    clearAdvanced();
  };

  // clear advanced
  const clearAdvanced = () => {
    const changed = getAdvanced.map((item) => {
      item.isChecked = false;
      return item;
    });
    setAdvanced(changed);
  };

  // add advanced
  const advancedHandler = (id) => {
    const data = getAdvanced.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });

    setAdvanced(data);
  };

  const { productsData } = useSelector((state) => state.products)
  if (productsData.status === 200) {
    const sub_categories = productsData.categories.filter(item => item.slug === "property-for-sale");
    const setFilter = (event) => {
      if (event.target.id === "category") {
        const productType = sub_categories[0].subCategory.filter(item => item.slug === event.target.value)
        setPropertyType(productType[0].productType)
        setSearchQuery(preState => {
          return {
            ...preState,
            [event.target.name]: event.target.value
          }
        })
      }
      else if (event.target.id === "amenties") {
        setSearchQuery(preState => {
          if (preState?.amenties === undefined) {
            return {
              ...preState,
              amenties: [event.target.value]
            }
          }
          else {
            console.log(preState.amenities, "preState.amenities");
            return {
              ...preState,
              amenties: [...searchQuery.amenties, event.target.value]
            }
          }

        })
      }
      else if (event.target.id !== "amenties" && event.target.id !== "category") {
        setSearchQuery(preState => {
          return {
            ...preState,
            [event.target.name]: event.target.value
          }
        })
      }
    }

    return (
      <ul className="sasw_list mb0">
        {
          // keyword
          <li className="search_area">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="keyword"
                name="search_text"
                id="search_text"
                onChange={setFilter}
              />
              <label>
                <span className="flaticon-magnifying-glass"></span>
              </label>
            </div>
          </li>
        }
        {
          // country

          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select
                  className="selectpicker w100 show-tick form-select"
                  id="country"
                  name="country"
                  onChange={setFilter}
                >
                  <option value="">Country</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="oman">Oman</option>
                  <option value="UAE">UAE</option>
                  <option value="Sudi arabia">Sudi Arabia</option>
                </select>
              </div>
            </div>
          </li>

        }
        {
          // city
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select
                  className="selectpicker w100 show-tick form-select"
                  id="city"
                  name="city"
                  onChange={setFilter}
                >
                  <option value="">City</option>
                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                </select>
              </div>
            </div>
          </li>
        }

        {
          // category
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select
                  className="selectpicker w100 show-tick form-select"
                  id="category"
                  name="category"
                  onChange={setFilter}
                >
                  <option value="">Category</option>
                  {
                    sub_categories[0].subCategory?.map(item => {
                      return <option value={item.slug} key={item._id}>{item.name}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </li>
        }
        {
          // filters
          property_types.length ?
            <>
              {
                // product type
                <li>
                  <div className="search_option_two">
                    <div className="candidate_revew_select">
                      <select
                        className="selectpicker w100 show-tick form-select"
                        name="property_type"
                        id="property_type"
                        onChange={setFilter}
                      >
                        <option value="">Property Type</option>
                        {
                          property_types?.map(item => {
                            return (
                              <option value={item.slug} key={item._id}>{item.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                </li>
              }

              {
                //  product price
                // <li>
                //   <div className="small_dropdown2">
                //     <div
                //       id="prncgs2"
                //       className="btn dd_btn"
                //       data-bs-toggle="dropdown"
                //       data-bs-auto-close="outside"
                //       aria-expanded="false"
                //     >
                //       <span>Price Range</span>
                //       <label htmlFor="prncgs2">
                //         <span className="fa fa-angle-down"></span>
                //       </label>
                //     </div>
                //     <div className="dd_content2 style2 dropdown-menu">
                //       <div className="pricing_acontent ">
                //         <PricingRangeSlider />
                //       </div>
                //     </div>
                //   </div>
                // </li>
              }

              {
                //  bathrooms
                <li>
                  <div className="search_option_two">
                    <div className="candidate_revew_select">
                      <select
                        className="selectpicker w100 show-tick form-select"
                        name="bathrooms"
                        id="bathrooms"
                        onChange={setFilter}
                      >
                        <option value="">Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </li>}


              {
                //  bedrooms
                <li>
                  <div className="search_option_two">
                    <div className="candidate_revew_select">
                      <select
                        className="selectpicker w100 show-tick form-select"
                        name="bedrooms"
                        id="bedrooms"
                        onChange={setFilter}
                      >
                        <option value="">Bedrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </li>}

              {
                // seller type
                <li>
                  <div className="search_option_two">
                    <div className="candidate_revew_select">
                      <select
                        className="selectpicker w100 show-tick form-select"
                        name="seller_type"
                        id="seller_type"
                        onChange={setFilter}
                      >
                        <option value="">Seller Type</option>
                        <option value="landlord">Landlord</option>
                        <option value="owner">Owner</option>
                      </select>
                    </div>
                  </div>
                </li>
              }


              {
                // minarea
                <li className="min_area list-inline-item">
                  <div className="form-group mb-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Min Area"
                      name="minarea"
                      id="minarea"
                      onChange={setFilter}
                    />
                  </div>
                </li>}

              {
                // maxarea
                <li className="max_area list-inline-item">
                  <div className="form-group mb-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Max Area"
                      name="maxarea"
                      id="maxarea"
                      onChange={setFilter}
                    />
                  </div>
                </li>
              }

              {
                // minprice
                <li className="min_area list-inline-item ">
                  <div className="form-group mb-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Min Price"
                      name="minprice"
                      id="minprice"
                      onChange={setFilter}
                    />
                  </div>
                </li>}

              {
                // maxprice
                <li className="max_area list-inline-item">
                  <div className="form-group mb-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Max Price"
                      name="maxprice"
                      id="maxprice"
                      onChange={setFilter}
                    />
                  </div>
                </li>
              }


              <li>
                <div id="accordion" className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          href="#panelBodyRating"
                          className="accordion-toggle link"
                          data-bs-toggle="collapse"
                          data-bs-parent="#accordion"
                        >
                          <i className="flaticon-more"></i> Advanced features
                        </a>
                      </h4>
                    </div>
                    {/* End .panel-heading */}

                    <div id="panelBodyRating" className="panel-collapse collapse">
                      <div className="panel-body row">
                        <div className="col-lg-12">
                          <ul className="ui_kit_checkbox selectable-list fn-400">
                            {getAdvanced?.map((feature) => (
                              <li key={feature.id}>
                                <div className="form-check custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="amenties"
                                    id="amenties"
                                    value={feature.name}
                                    onChange={setFilter}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={feature.id}
                                  >
                                    {feature.name}
                                  </label>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End li */}

              <li>
                <div className="search_option_button">
                  <button
                    onClick={clearHandler}
                    type="button"
                    className="btn btn-block btn-thm w-100"
                  >
                    Clear Filters
                  </button>
                </div>
              </li>
            </> : ""
        }
      </ul>
    );
  }
};

export default FilteringItem;
