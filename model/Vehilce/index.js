import mongoose from "mongoose";
import User from "../User";
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    "images": {
        type: Array
    },
    "category": {
        type: mongoose.Schema.Types.ObjectId,
    },
    "sub_category": {
        type: mongoose.Schema.Types.ObjectId,
    },
    "is_saled": {
        type: Boolean,
        default: 0
    },
    "views": {
        type: Boolean,
        default: 0
    },
    "postedBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref:User
    },
    "title":{
        type:String
    },
    "description":{
        type:String
    },
    "condition":{
        type:String
    },
    "city":{
        type:String
    },
    "country":{
        type:String
    },
    "neighbourhood":{
        type:Array
    },
    "video_link":{
        type:String
    },
    "maker":{
        type:String
    },
    "model":{
        type:String
    },
    "year":{
        type:String
    },
    "kilometers":{
        type:Number
    },
    "warranty":{
        type:String
    },
    "color":{
        type:String
    },
    "regional_specs":{
        type:String
    },
    "chassis_number":{
        type:String
    },
    "transmission_type":{
        type:String
    },
    "spare_part_type":{
        type:String
    },
    "spare_part_condition":{
        type:String
    },
    "num_plate_city":{
        type:String
    },
    "num_plate_type":{
        type:String
    },
    "plate_code":{
        type:String
    },
    "num_plate_digits":{
        type:Number
    },
    "plate_design":{
        type:String
    },
    "plate_num":{
        type:String
    },
    "body_type":{
        type:String
    },
    "vehicle_type":{
        type:String
    },
    "heavy_vehicle_sub_type":{
        type:String
    },
    "boat_type":{
        type:String
    },
    "boat_sub_type":{
        type:String
    },
    "horse_power":{
        type:Number
    },
    "age":{
        type:Number
    },
    "length":{
        type:Number
    },
    "usage":{
        type:String
    },
    "final_driven_system":{
        type:String
    },
    "wheel":{
        type:Number
    },
    "doors":{
        type:Number
    },
    "body_condition":{
        type:String
    },
    "boat_condition":{
        type:String
    },
    "boat_engine":{
        type:String
    },
    "no_of_engines":{
        type:Number
    },
    "inpoard_outboard":{
        type:String
    },
    "engine_condition":{
        type:String
    },
    "engine_size":{
        type:Number
    },
    "no_of_cylinder":{
        type:Number
    },
    "fuel_type":{
        type:String
    },
    "capacity":{
        type:Number
    },
    "steering_side":{
        type:String
    },
    "seller_type":{
        type:String
    },
    "extras":{
        type:Array
    },
    "location":{
        type:String
    },
    "price":{
        type:Number
    },
    "call_for_price":{
        type:Boolean
    },
    "quantity":{
        type:Number
    },
    "slug":{
        type:String
    },
});

export default mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);