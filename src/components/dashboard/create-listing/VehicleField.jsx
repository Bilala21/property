const ehicleField = ({ handleFormField, controllFormField }) => {
  return (
    <>
      {
        // select element (maker)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Product Maker</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="maker"
              id="maker"
              onInput={handleFormField}
            >
              <option data-tokens="">Select  product make</option>
              <option data-tokens="honda">Honda</option>
              <option data-tokens="suzuki">Suzuki</option>
            </select>
          </div>
        </div>
      }
      {
        // select element (modal)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Product Modal</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="model"
              id="model"
              onInput={handleFormField}
            >
              <option data-tokens="">Select  product model</option>
              <option data-tokens="2022">2022</option>
              <option data-tokens="2023">2023</option>
            </select>
          </div>
        </div>
      }
      {
        // select element (year)
        (
          controllFormField === "used-cars" ||
          controllFormField === "motorcycles"
        ) &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Year</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="year"
              id="year"
              onInput={handleFormField}
            >
              <option data-tokens="">Select year</option>
              <option data-tokens="2022">2022</option>
              <option data-tokens="2023">2023</option>
            </select>
          </div>
        </div>
      }
      {
        // select element (warranty)
        (
          controllFormField === "used-cars" ||
          controllFormField === "motorcycles"
        ) &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Warranty</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="warranty"
              id="warranty"
              onInput={handleFormField}
            >
              <option data-tokens="">Select warranty</option>
              <option data-tokens="yes">Yes</option>
              <option data-tokens="no">No</option>
              <option data-tokens="not-apply">Does not apply</option>
            </select>
          </div>
        </div>
      }
      {
        // select element (color)
        (
          controllFormField === "used-cars" ||
          controllFormField === "motorcycles"
        ) &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Color</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="color"
              id="color"
              onInput={handleFormField}
            >
              <option data-tokens="">Select warranty</option>
              <option data-tokens="yes">Yes</option>
              <option data-tokens="no">No</option>
              <option data-tokens="not-apply">Does not apply</option>
            </select>
          </div>
        </div>
      }
      {// select element (regional specs)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Regional Specs</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="regional_specs"
              id="regional_specs"
              onInput={handleFormField}
            >
              <option data-tokens="">Select regional specs</option>
              <option data-tokens="gcc">GCC</option>
            </select>
          </div>
        </div>
      }
      {// select element (transmission type)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Transmission Type</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="transmission_type"
              id="transmission_type"
              onInput={handleFormField}
            >
              <option data-tokens="">Select transmission type</option>
              <option data-tokens="automatic">Automatic</option>
              <option data-tokens="manual">Manual</option>
            </select>
          </div>
        </div>
      }
      {// select element (body type)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Body Type</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="body_type"
              id="body_type"
              onInput={handleFormField}
            >
              <option data-tokens="">Select body type</option>
              <option data-tokens="sedan">Sedan</option>
            </select>
          </div>
        </div>
      }
      {// select element (bike type)
        (controllFormField === "motorcycles") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Bike Type</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="bike_type"
              id="bike_type"
              onInput={handleFormField}
            >
              <option data-tokens="">Select bike type</option>
              <option data-tokens="off road">Off road</option>
              <option data-tokens="cruiser">Cruiser</option>
              <option data-tokens="other">Other</option>
            </select>
          </div>
        </div>
      }
      {// select element (bike manufacture)
        (controllFormField === "motorcycles") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Bike Manufacturer</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="bike_manufacturer"
              id="body_type"
              onInput={handleFormField}
            >
              <option data-tokens="">Select bike manufacturer</option>
              <option data-tokens="honda">Honda</option>
              <option data-tokens="suzuki">Suzuki</option>
            </select>
          </div>
        </div>
      }
      {// select element (usages)
        (controllFormField === "motorcycles") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Usages</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="usages"
              id="usages"
              onInput={handleFormField}
            >
              <option data-tokens="">Select usages</option>
              <option data-tokens="never been used">Never been used</option>
              <option data-tokens="used over day">Used over day</option>
            </select>
          </div>
        </div>
      }
      {// select element (doors type)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Doors</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="Doors"
              id="Doors"
              onInput={handleFormField}
            >
              <option data-tokens="">Select doors</option>
              <option data-tokens="2">2 Doors</option>
              <option data-tokens="5">5+ Doors</option>
            </select>
          </div>
        </div>
      }
      {// select element (body condition)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Body Condition</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="body_condition"
              id="body_condition"
              onInput={handleFormField}
            >
              <option data-tokens="">Select body condition</option>
              <option data-tokens="Perfect, like new">Perfect, like new</option>
              <option data-tokens="No accident, very few fualts">No accident, very few fualts</option>
            </select>
          </div>
        </div>
      }
      {// select element (engine condition)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Body Condition</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="engine_condition"
              id="engine_condition"
              onInput={handleFormField}
            >
              <option data-tokens="">Select Engine condition</option>
              <option data-tokens="Perfect, like new">Perfect, like new</option>
              <option data-tokens="No accident, very few fualts">No accident, very few repaired</option>
            </select>
          </div>
        </div>
      }
      {// select element (number of cylinder)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>No Of Cylinder</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="no_of_cylinder"
              id="no_of_cylinder"
              onInput={handleFormField}
            >
              <option data-tokens="">Select no of cylinder</option>
              <option data-tokens="1">1</option>
              <option data-tokens="2">2</option>
              <option data-tokens="unknown">Unknown</option>
            </select>
          </div>
        </div>
      }
      {// select element (fuel type)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Fuel Type</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="fuel_type"
              id="fuel_type"
              onInput={handleFormField}
            >
              <option data-tokens="">Select fuel type</option>
              <option data-tokens="gasoline">Gasoline</option>
              <option data-tokens="hybrid">Hybrid</option>
              <option data-tokens="diesel">Diesel</option>
              <option data-tokens="electric">Electric</option>
            </select>
          </div>
        </div>
      }
      {// select element (steering side)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Steering Side</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="steering_side"
              id="steering_side"
              onInput={handleFormField}
            >
              <option data-tokens="">Select steering side</option>
              <option data-tokens="left hand side">Left hand side</option>
              <option data-tokens="right hand side">Right hand side</option>
            </select>
          </div>
        </div>
      }
      {// select element (seller type)
        (
          controllFormField === "used-cars" ||
          controllFormField === "motorcycles"
        ) &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Seller Type</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="seller_type"
              id="seller_type"
              onInput={handleFormField}
            >
              <option data-tokens="">Select seller type</option>
              <option data-tokens="onwer">Owner</option>
              <option data-tokens="dealer">Dealer</option>
            </select>
          </div>
        </div>
      }

      {// input(kilometer)
        (
          controllFormField === "used-cars" ||
          controllFormField === "motorcycles"
        ) &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Kilometers</label>
            <input
              type="text"
              className="form-control"
              name="kilometers"
              id="kilometers"
              onInput={handleFormField}
            />
          </div>
        </div>
      }

      {// input(chassis num)
        (controllFormField === "used-cars") &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Chassis Number</label>
            <input
              type="text"
              className="form-control"
              name="chassis_number"
              id="chassis_number"
              onInput={handleFormField}
            />
          </div>
        </div>
      }
    </>
  );
};

export default ehicleField;
