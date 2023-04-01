import LocationField from "./LocationField";
import DetailedInfo from "./DetailedInfo";
import PropertyMediaUploader from "./PropertyMediaUploader";
import FloorPlans from "./FloorPlans";
import VehicleField from "./VehicleField";
import { amenties } from "../../../data/amenties"
import { useState } from "react";

const CreateList = () => {
  const [controllFormField, setControllFormField] = useState("")
  const [category, setCategory] = useState("")
  const [db_data, setDbData] = useState({})
  const categories = [
    "property-for-sale",
    "property-for-rent",
    "vehicles"
  ]
  const sub_categories = [
    "residential-for-sale",
    "residential-for-rent",
    "commercial-for-sale",
    "commercial-for-rent",
    "flatmate",
    "short-term-rent",
    "land-for-sale",
    "used-cars",
    "motorcycles",
    "heavy-vehicles",
    "boats",
    "number-plates",
    "spare-parts"
  ]
  const setImages = (ev) => {
    console.log(Object.values(ev.target.files))
    setDbData(preState => {
      return { ...preState, images: Object.values(ev.target.files) }
    })
  }
  const handleFormField = (ev) => {
    const target_node = ev.target;
    if (target_node.nodeName === "SELECT" || target_node.nodeName === "select") {
      const selected_option = target_node.options[target_node.options.selectedIndex];
      const db_field_name = target_node.name;
      const db_field_value = target_node.value;
      setControllFormField(db_field_value)
      if (target_node.id == "product_category") {
        setCategory(db_field_value)
      }
      console.log(db_field_value);
    }
    if (target_node.nodeName === "INPUT" || target_node.nodeName === "input") {
      const db_field_name = target_node.name;
      if (target_node === "checkbox" || target_node === "CHECKBOX") {
        const db_field_value = target_node.value;
      }
    }
    if (target_node.nodeName === "TEXTAREA" || target_node.nodeName === "textarea") {
      console.log(target_node);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.values(db_data.images).forEach((image,index)=>{
      formData.append(index, image);
    })
    
    fetch("http://localhost:3000/api/property/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        {/* product categories */}
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
              <option data-tokens="Status1">Select category</option>            {
                categories?.map(category => <option data-tokens={category} data-slug={category} key={category}>{category}</option>)
              }
            </select>
          </div>
        </div>
        {/* End .col */}

        {/* product sub categories */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Product Sub Categories</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="product_sub_category"
              id="product_sub_category"
              onInput={handleFormField}
            >
              <option data-tokens="Status1">Select sub category</option>
              {
                sub_categories?.map(item => <option data-tokens={item} slug={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>
        {/* product titel*/}
        <div className="col-lg-12">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="propertyTitle">Product Title</label>
            <input type="text" className="form-control" name="product_title" id="product_title" onInput={handleFormField} />
          </div>
        </div>
        {/* description*/}

        <div className="col-lg-12">
          <div className="my_profile_setting_textarea">
            <label htmlFor="propertyDescription">Description</label>
            <textarea
              className="form-control"
              rows="7"
              name="product_description"
              id="product_description"
              onInput={handleFormField}
            ></textarea>
          </div>
        </div>
        {/* condition */}
        {
          <div className="col-lg-12">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="condition">Product Condition</label>
              <input type="text" className="form-control"
                name="condition"
                id="condition"
                onInput={handleFormField} />
            </div>
          </div>
        }
        {/* video link */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Video link</label>
            <input
              type="text"
              className="form-control"
              name="video_link"
              id="video_link"
              onInput={handleFormField}
            />
          </div>
        </div>
        {/* product type */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "residential-for-sale" ||
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "flatmate"
          ) &&
          < div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Product Type</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="product_type"
                id="product_type"
                onInput={handleFormField}
              >
                <option data-tokens="type1">Select product type</option>
                <option data-tokens="Type2">Type2</option>
                <option data-tokens="Type3">Type3</option>
                <option data-tokens="Type4">Type4</option>
                <option data-tokens="Type5">Type5</option>
              </select>
            </div>
          </div>
        }
        {/* bedrooms */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "residential-for-sale") &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Bedrooms</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="bedrooms"
                id="bedrooms"
                onInput={handleFormField}
              >
                <option data-tokens="type1">Select bedrooms</option>
                <option data-tokens="Type2">Type2</option>
                <option data-tokens="Type3">Type3</option>
                <option data-tokens="Type4">Type4</option>
                <option data-tokens="Type5">Type5</option>
              </select>
            </div>
          </div>
        }
        {/* bathrooms */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "flatmate" ||
            controllFormField === "residential-for-sale") &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Bathrooms</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="bathrooms"
                id="bathrooms"
                onInput={handleFormField}
              >
                <option data-tokens="type1">Select bedrooms</option>
                <option data-tokens="Type2">Type2</option>
                <option data-tokens="Type3">Type3</option>
                <option data-tokens="Type4">Type4</option>
                <option data-tokens="Type5">Type5</option>
              </select>
            </div>
          </div>
        }
        {/* size */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "flatmate" ||
            controllFormField === "residential-for-sale" ||
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Size</label>
              <input
                type="text"
                className="form-control"
                name="size"
                id="size"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* zonedfor */}
        {
          controllFormField === "land-for-sale" &&

          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Zoned For</label>
              <input
                type="text"
                className="form-control"
                name="zoned_for"
                id="zoned_for"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* size_postfix */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "residential-for-sale" ||
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Size Prefix</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="size_prefix"
                id="size_prefix"
                onInput={handleFormField}
              >
                <option data-tokens="type1">Select size pretfix</option>
                <option data-tokens="Type2">Type2</option>
                <option data-tokens="Type3">Type3</option>
                <option data-tokens="Type4">Type4</option>
                <option data-tokens="Type5">Type5</option>
              </select>
            </div>
          </div>
        }
        {/* size_postfix */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "residential-for-sale" ||
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Size Postfix</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="size_postfix"
                id="size_postfix"
                onInput={handleFormField}
              >
                <option data-tokens="type1">Select size postfix</option>
                <option data-tokens="Type2">Type2</option>
                <option data-tokens="Type3">Type3</option>
                <option data-tokens="Type4">Type4</option>
                <option data-tokens="Type5">Type5</option>
              </select>
            </div>
          </div>
        }
        {/* developer */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale" ||
            controllFormField === "residential-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Developer</label>
              <input
                type="text"
                className="form-control"
                name="developer"
                id="developer"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* real estate agent */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "residential-for-sale" ||
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale"

          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Real Estate Agent</label>
              <input
                type="text"
                className="form-control"
                name="real_estate_agent"
                id="real_estate_agent"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* freehold */}
        {
          (
            controllFormField === "residential-for-sale" ||
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Freehold</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="freehold"
                id="freehold"
                onInput={handleFormField}
              >
                <option data-tokens="">Select freehold</option>
                <option data-tokens="true">Yes</option>
                <option data-tokens="false">No</option>
              </select>
            </div>
          </div>
        }
        {/* daily_mothly */}
        {(controllFormField === "short-term-rent"
        ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Daily Mothly</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="daily_mothly"
                id="daily_mothly"
                onInput={handleFormField}
              >
                <option data-tokens="">Select daily mothly</option>
                <option data-tokens="daily">Daily</option>
                <option data-tokens="monthly">Monthly</option>
              </select>
            </div>
          </div>
        }
        {/* furnished/unfurnished */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Furnished/Unfurnished</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="decoration"
                id="decoration"
                onInput={handleFormField}
              >
                <option data-tokens="">Select Furnished/Unfurnished</option>
                <option data-tokens="furnished">Furnished</option>
                <option data-tokens="unfurnished">Unfurnished</option>
              </select>
            </div>
          </div>
        }
        {/* listed by */}
        {
          (controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent" ||
            controllFormField === "short-term-rent")
          &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Listed By</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="listed_by"
                id="listed_by"
                onInput={handleFormField}
              >
                <option data-tokens="">Select Listed By</option>
                <option data-tokens="landlord">Landlord</option>
                <option data-tokens="agency">Agency</option>
              </select>
            </div>
          </div>
        }
        {/* rent is paid */}
        {
          (
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Rent is paid</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="rent_is_paid"
                id="freehold"
                onInput={handleFormField}
              >
                <option data-tokens="">Select Rent is paid</option>
                <option data-tokens="monthly">Monthly</option>
                <option data-tokens="quarterly">Quarterly</option>
                <option data-tokens="biannually">Bi-annually</option>
                <option data-tokens="annually">Annually</option>
              </select>
            </div>
          </div>
        }
        {/* product reference */}
        {
          controllFormField === "residential-for-rent" ||
          controllFormField === "commercial-for-rent" ||
          controllFormField === "short-term-rent" ||
          controllFormField === "flatmate" ||
          controllFormField === "residential-for-sale" ||
          controllFormField === "commercial-for-sale" ||
          controllFormField === "land-for-sale" &&
          < div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Product Reference</label>
              <input
                type="text"
                className="form-control"
                name="product_reference"
                id="product_reference"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* status */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "residential-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Occupancy Status</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="status"
                id="status"
                onInput={handleFormField}
              >
                <option data-tokens="">Select Status</option>
                <option data-tokens="true">Vacant</option>
                <option data-tokens="false">Occupied</option>
              </select>
            </div>
          </div>
        }
        {/* community fees */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "residential-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Community Fees</label>
              <input
                type="text"
                className="form-control"
                name="community_fees"
                id="community_fees"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* buyer transfer fees */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale" ||
            controllFormField === "residential-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Buyer Transfer Fees</label>
              <input
                type="number"
                className="form-control"
                name="buyer_transfer_fee"
                id="buyer_transfer_fee"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* seller transfer fees */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "land-for-sale" ||
            controllFormField === "residential-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Seller Transfer Fees</label>
              <input
                type="number"
                className="form-control"
                name="seller_transfer_fee"
                id="seller_transfer_fee"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* maintenace fees */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "residential-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Maintenance Fees</label>
              <input
                type="number"
                className="form-control"
                name="maintenance_fees"
                id="maintenance_fees"
                onInput={handleFormField}
              />
            </div>
          </div>
        }
        {/* seller type */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "residential-for-sale"
          ) &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Sellert Type</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="seller_type"
                id="seller_type"
                onInput={handleFormField}
              >
                <option data-tokens="">Select seller type</option>
                <option data-tokens="ower">Owner</option>
                <option data-tokens="agent">Agent</option>
              </select>
            </div>
          </div>
        }
        {/*room_type*/}
        {
          (controllFormField === "flatmate") &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Room Type</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="seller_type"
                id="seller_type"
                onInput={handleFormField}
              >
                <option data-tokens="">Select room type</option>
                <option data-tokens="private">Private Room</option>
                <option data-tokens="room_with_partition">Room With Partition</option>
                <option data-tokens="bed_space">Bed Space</option>
              </select>
            </div>
          </div>
        }
        {/*preferred_tenant_nationality*/}
        {
          (controllFormField === "flatmate") &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Preferred Tenant Nationality</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="preferred_tenant_nationality"
                id="preferred_tenant_nationality"
                onInput={handleFormField}
              >
                <option data-tokens="">Select Preferred Tenant Nationality</option>
                <option data-tokens="mixed">Mixed</option>
                <option data-tokens="pakistani">Pakistani</option>
                <option data-tokens="indian">Indian</option>
              </select>
            </div>
          </div>
        }
        {/*type_of_tenant_allowed*/}
        {
          (controllFormField === "flatmate") &&
          <>
            <div className="col-lg-6 col-xl-6">
              <div className="my_profile_setting_input ui_kit_select_search form-group">
                <label>Type Of Tenant Allowed</label>
                <select
                  className="selectpicker form-select"
                  data-live-search="true"
                  data-width="100%"
                  name="type_of_tenant_allowed"
                  id="type_of_tenant_allowed"
                  onInput={handleFormField}
                >
                  <option data-tokens="">Select Type Of Tenant Allowed</option>
                  <option data-tokens="dontmind">Don`t Mind</option>
                  <option data-tokens="males">Males</option>
                  <option data-tokens="females">Females</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="formGroupExamplePrice">Mini Contract Period In Month</label>
                <input
                  type="number"
                  className="form-control"
                  name="mini_contract_period_month"
                  id="mini_contract_period_month"
                  onInput={handleFormField}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="formGroupExamplePrice">Number Of Tenants</label>
                <input
                  type="number"
                  className="form-control"
                  name="number_of_tenants"
                  id="number_of_tenants"
                  onInput={handleFormField}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="formGroupExamplePrice">Notice Period In Month</label>
                <input
                  type="number"
                  className="form-control"
                  name="notice_period_month"
                  id="notice_period_month"
                  onInput={handleFormField}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="formGroupExamplePrice">Security Deposite</label>
                <input
                  type="number"
                  className="form-control"
                  name="security_deposite"
                  id="security_deposite"
                  onInput={handleFormField}
                />
              </div>
            </div>
          </>
        }
        {
          // vehiclefields
          (category === "vehicles") &&
          <VehicleField handleFormField={handleFormField} controllFormField={controllFormField} />

        }
        {/* quantity*/}
        <div className="col-lg-6 col-xl-6">
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
        <div className="form-check custom-checkbox col-12 ms-3">
          <input type="checkbox" className="form-check-input"
            name="call_for_price"
            id="call_for_price"
            onInput={handleFormField}
          />
          <label className="form-check-label" htmlFor="call_for_price">Call For Price</label>
        </div>
















        {/* product loaction */}
        <div className="my_dashboard_review mt30">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="mb30">Location</h3>
            </div>
            <LocationField handleFormField={handleFormField} controllFormField={controllFormField} />
          </div>
        </div>
        {/* product detailed information */}
        <div className="my_dashboard_review mt30 d-none">
          <div className="col-lg-12">
            <h3 className="mb30">Detailed Information</h3>
          </div>
          <DetailedInfo handleFormField={handleFormField} />
        </div>

        {/* product media */}
        <div className="my_dashboard_review mt30 mb30">
          <div className="col-lg-12">
            <h3 className="mb30">Property media</h3>
          </div>
          <PropertyMediaUploader setImages={setImages} />
        </div>
        {/* amenties */}
        {
          (
            controllFormField === "commercial-for-sale" ||
            controllFormField === "residential-for-sale" ||
            controllFormField === "residential-for-rent" ||
            controllFormField === "commercial-for-rent" ||
            controllFormField === "short-term-rent" ||
            controllFormField === "flatmate"
          ) &&
          <div className="p-0">
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

        {/* product plans */}

        <div className="my_dashboard_review mt30 d-none">
          <div className="col-lg-12">
            <h3 className="mb30">Floor Plans</h3>
            <button className="btn admore_btn mb30">Add More</button>
          </div>
          <FloorPlans handleFormField={handleFormField} />
        </div>

        <div className="col-xl-12 mt30">
          <div className="my_profile_setting_input">
            <button className="btn btn1 float-start">Cancel</button>
            <button type="submit" className="btn btn2 float-end">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateList;
