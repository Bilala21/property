import CheckBoxFilter from "../../common/CheckBoxFilter";

const DetailedInfo = ({handleFormField}) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">Product ID</label>
          <input type="text" className="form-control" name="product_id" id="product_id" onInput={handleFormField}/>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">Area Size</label>
          <input type="text" className="form-control" name="product_size" id="product_size" onInput={handleFormField}/>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sizePrefix">Size Prefix</label>
          <input type="text" className="form-control" name="product_size_prefix" id="product_size_prefix" onInput={handleFormField}/>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">Land Area</label>
          <input type="text" className="form-control" name="product_land_area" id="product_land_area" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="LASPostfix">Land Area Size Postfix</label>
          <input type="text" className="form-control" name="product_postfix" id="product_postfix" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bedRooms">Bedrooms</label>
          <input type="text" className="form-control" name="product_bedrooms" id="product_bedrooms" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bathRooms">Bathrooms</label>
          <input type="text" className="form-control" name="product_bathrooms" id="product_bathrooms" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garages">Garages</label>
          <input type="text" className="form-control" name="product_garages" id="product_garages" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garagesSize">Garages Size</label>
          <input type="text" className="form-control" name="product_garage_size" id="product_garage_size" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Year Built</label>
          <input type="text" className="form-control" name="product_build_year" id="product_build_year" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="videoUrl">Video URL</label>
          <input type="text" className="form-control"name="product_video_url" id="product_video_url" onInput={handleFormField} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="virtualTour">360° Virtual Tour</label>
          <input type="text" className="form-control" name="product_virtual_360" id="product_virtual_360" onInput={handleFormField} />
        </div>
      </div>

      <div className="col-xl-12">
        <h4 className="mb10">Amenities</h4>
      </div>

      <CheckBoxFilter handleFormField={handleFormField}/>

      <div className="col-xl-12 d-none">
        <div className="my_profile_setting_input overflow-hidden mt20">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DetailedInfo;
