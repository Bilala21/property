const FloorPlans = ({ handleFormField }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planDsecription">Plan Description</label>
          <input type="text" className="form-control"
            name="product_plan_desc"
            id="product_plan_desc"
            onInput={handleFormField}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planBedrooms">Plan Bedrooms</label>
          <input type="text" className="form-control"
            name="product_plan_bedrooms"
            id="product_plan_bedrooms"
            onInput={handleFormField}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planBathrooms">Plan Bathrooms</label>
          <input type="text" className="form-control"
            name="product_plan_bathrooms"
            id="product_plan_bathrooms"
            onInput={handleFormField}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planPrice">Plan Price</label>
          <input type="text" className="form-control"
            name="product_plan_price"
            id="product_plan_price"
            onInput={handleFormField}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planPostfix">Price Postfix</label>
          <input type="text" className="form-control"
            name="product_plan_postfix"
            id="product_plan_postfix"
            onInput={handleFormField}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planSize">Plan Size</label>
          <input type="text" className="form-control"
            name="product_plan_size"
            id="product_plan_size"
            onInput={handleFormField}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label>Plan Image</label>
          <div className="avatar-upload">
            <div className="avatar-edit">
              <input
                className="btn btn-thm"
                type="file"
                name="product_plan_image"
                id="product_plan_image"
                onInput={handleFormField}
                accept=".png, .jpg, .jpeg"
              />
              <label htmlFor="imageUpload"></label>
            </div>
            <div className="avatar-preview">
              <div id="imagePreview"></div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_textarea mt30-991">
          <label htmlFor="planDescription">Plan Description</label>
          <textarea
            className="form-control"
            rows="7"
            name="product_plan_description"
            id="product_plan_description"
            onInput={handleFormField}
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12 d-none">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FloorPlans;
