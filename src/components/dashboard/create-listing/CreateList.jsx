// import LocationField from "./LocationField";
// import DetailedInfo from "./DetailedInfo";
import PropertyMediaUploader from "./PropertyMediaUploader";
// import FloorPlans from "./FloorPlans";
// import VehicleField from "./VehicleField";
import { amenties } from "../../../data/amenties"
import { useState } from "react";
import { property_for_sale } from "../../../data/formFields"
import { useGetProductQuery } from "../../../features/properties/productApi";
const CreateList = () => {
  const { data, isLoading } = useGetProductQuery();
  const [subCategories, setSubCategories] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])
  const [fieldControl, setFieldControl] = useState("")
  const setImages = (ev) => { }

  if (!isLoading) {
    const handleFormField = (ev) => {
      const target_node = ev.target;
      if (target_node.id === "category") {
        const slug = target_node.options[target_node.options.selectedIndex].getAttribute("data-slug");
        setSubCategories(data.categories.filter(item => item.slug === slug))
      }
      if (target_node.id === "product_category" && subCategories.length) {
        const slug = target_node.options[target_node.options.selectedIndex].getAttribute("data-slug");
        setPropertyTypes(subCategories[0].subCategory.filter(item => item.slug === slug))
        setFieldControl(slug)
        console.log(slug, "slug");
      }
    }
    const fields = {
      "property_type": {
        type: "select",
      },
      "developer": {
        type: "input",
      },
      "property_reference": {
        type: "input",
      },
      "occupancy_statuce": {
        type: "select",
        options: ["vacant", "occupaid"]
      },
      "seller_type": {
        type: "select",
        options: ["landlord", "owner"]
      },
      "zoned_for": {
        type: "input",
      },
      "bedrooms": {
        type: "select",
        options: [1, 2, 3, 4, 5],
        form_field: ["residential-for-sale", "residential-for-rent"],
      },
      "bathrooms": {
        type: "select",
        options: [1, 2, 3, 4, 5],
        form_field: ["residential-for-sale", "residential-for-rent"],
      },
    }
    const fieldss = []
    const fieldss1 = []

    Object.keys(property_for_sale).filter((item, index) => {
      if (fieldControl) {

        if (property_for_sale[item]['form_field']?.includes(fieldControl)) {
          // console.log(property_for_sale[item]);
          fieldss.push(property_for_sale[item])
        }
        else {
          // console.log(property_for_sale[item]);
          // fieldss1.push(property_for_sale[item])
        }
      }
    })
    console.log("fieldss =>", fieldss);
    return (
      <div className="row m-0">
        {/* product categories */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Product Categories</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="category"
              id="category"
              onInput={handleFormField}
            >
              <option data-tokens="Status1">Select category</option>
              {
                data.categories?.map(category => <option data-tokens={category.slug} data-slug={category.slug} key={category._id}>{category.name}</option>)
              }
            </select>
          </div>
        </div>
        {/* sub category */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Product Categories</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="product_category"
              id="product_category"
              onInput={handleFormField}
            >
              <option data-tokens="Status1">Select category</option>
              {
                subCategories.length &&
                subCategories[0].subCategory?.map(category => <option data-tokens={category.slug} data-slug={category.slug} key={category._id}>{category.name}</option>)
              }
            </select>
          </div>
        </div>
        {/* title */}
        <div className="col-12">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="condition">Title</label>
            <input type="text" className="form-control"
              name="title"
              id="title"
              onInput={handleFormField} />
          </div>
        </div>
        {/* product media */}
        <div className="col-12">
          <div className="my_dashboard_review mt30 mb30">
            <div className="col-lg-12">
              <h3 className="mb30">Property media</h3>
            </div>
            <PropertyMediaUploader setImages={setImages} />
          </div>
        </div>
        {/* country */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Country</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="countery"
              id="countery"
              onInput={handleFormField}
            >
            </select>
          </div>
        </div>
        {/* city */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>City</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="city"
              id="city"
              onInput={handleFormField}
            >
            </select>
          </div>
        </div>
        {/* description */}
        <div className="col-lg-12">
          <div className="my_profile_setting_textarea">
            <label htmlFor="propertyDescription">Description</label>
            <textarea
              className="form-control"
              rows="7"
              name="product_description"
              id="product_description"
            ></textarea>
          </div>
        </div>
        {/* condition */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Condition</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="condition"
              id="condition"
            >
            </select>
          </div>
        </div>
        {/* video link */}
        <div className="col-xl-6 col-lg-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="condition">Video Link</label>
            <input type="text" className="form-control"
              name="video_link"
              id="video_link"
              onInput={handleFormField} />
          </div>
        </div>

        {/* dynamic fields */}
        {
          fieldss.length &&
          fieldss.map((item, index) => {
            return (
              <>
                {
                  item.element === "input" &&
                  <div className="col-6">
                    <div className="my_profile_setting_input form-group">
                      <label className="m-0" htmlFor={item?.label}>{item?.label?.split('_').join(' ')[0].toUpperCase().slice(0) + item?.label?.split('_').join(' ').slice(1)}</label>
                      <input type={item?.type} className="form-control"
                        placeholder={item?.label?.split('_').join(' ')[0].toUpperCase().slice(0) + item?.label?.split('_').join(' ').slice(1)}
                        name={item?.label}
                        id={item?.label}
                        onInput={handleFormField} />
                    </div>
                  </div>
                }
                {
                  item.element === "select" &&
                  <div className="col-6">
                    <div className="my_profile_setting_input ui_kit_select_search form-group">
                        <label className="m-0" htmlFor={item?.label}>{item?.label?.split('_').join(' ')[0].toUpperCase().slice(0) + item?.label?.split('_').join(' ').slice(1)}</label>
                      <select
                        className="selectpicker form-select"
                        data-live-search="true"
                        data-width="100%"
                        name={item?.label}
                        id={item?.label}
                        onInput={handleFormField}
                      >

                      </select>
                    </div>
                  </div>
                }
              </>
            )
          })
        }
        {/* end dynamic fields */}

        {/* quantity*/}
        <div className="row m-0">
          <div className="col-lg-6 col-xl-6 p-0">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                id="quantity"
                onInput={handleFormField}
              />
            </div>
          </div>
          {/* Call For Price*/}
          <div className="form-check custom-checkbox col-3 ms-3 pt-3 my_profile_setting_input">
            <input type="checkbox" className="form-check-input"
              name="call_for_price"
              id="call_for_price"
              onInput={handleFormField}
            />
            <label htmlFor="call_for_price">Call For Price</label>
          </div>
        </div>
        {
          // amenties
          <div className="col-12 my_profile_setting_input">
            <label className="" htmlFor="formGroupExamplePrice">Amenties</label>
            <ul className="ui_kit_checkbox selectable-list row m-0">
              {
                amenties.map((amenty, index) => {
                  return (
                    <li style={{ "width": "200px" }} key={amenty} className="px-0">
                      <div className="form-check custom-checkbox">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={amenty.split(' ').join('_')}
                          name="product_amenties"
                          onInput={handleFormField}
                        />
                        <label className="form-check-label" htmlFor={amenty.split(' ').join('_')}>
                          {amenty}
                        </label>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        }
        <div className="my_dashboard_review mt30 col-12 d-none">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="mb30">Location</h3>
            </div>
            {/* <LocationField handleFormField={handleFormField} /> */}
          </div>
        </div>
        <div className="col-xl-12 mt30">
          <div className="my_profile_setting_input">
            <button className="btn btn1 float-start">Cancel</button>
            <button type="submit" className="btn btn2 float-end">Submit</button>
          </div>
        </div>
      </div>
    );
  }
};

export default CreateList;
