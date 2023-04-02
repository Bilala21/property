import mongoose from "mongoose";
import User from "../model/User";
import Category from "../model/Category";
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    "category_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category,
        required: true
    },
    "category_type_id": {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    "PostedBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    "is_saled": {
        type: Boolean,
        default: "0"
    },
    "views": {
        type: Array,
        default: "0"
    },
    "slug": {
        type: String,
        required: true
    },
    "images": {
        type: Array
    },
    "title": {
        type: String,
        required:true
    },
    "description": {
        type: String
    },
    "condition": {
        type: String
    },
    "city": {
        type: String,
        required:true
    },
    "country": {
        type: String,
        required:true
    },
    "neighbourhood": {
        type: Array
    },
    "video_link": {
        type: String
    },
    "spare_type": {
        type: String
    },
    "vehicle_type": {
        type: String
    },
    "no_plate_city": {
        type: String
    },
    "no_plate_type": {
        type: String
    },
    "no_plate_code": {
        type: String
    },
    "plate_no": {
        type: String
    },
    "no_plate_digits": {
        type: String
    },
    "no_plate_design": {
        type: String
    },
    "vehicle_sub_type": {
        type: String
    },
    "age": {
        type: String
    },
    "boat_length": {
        type: String
    },
    "boat_engine": {
        type: String
    },
    "no_of_engine": {
        type: String
    },
    "inboard_outboard": {
        type: String
    },
    "maker": {
        type: String,
        required:true
    },
    "model": {
        type: String,
        required:true
    },
    "year": {
        type: String,
        required:true
    },
    "kilometers": {
        type: Number,
        required:true
    },
    "warranty": {
        type: Number,
        required:true
    },
    "capacity": {
        type: String,
        required:true
    },
    "usage": {
        type: String
    },
    "final_driven_system": {
        type: String
    },
    "wheel": {
        type: String
    },
    "engine_size": {
        type: String
    },
    "color": {
        type: String,
        required:true
    },
    "regional_specs": {
        type: String
    },
    "chassis_no": {
        type: String
    },
    "transmission_type": {
        type: String
    },
    "body_type": {
        type: String
    },
    "doors": {
        type: String
    },
    "body_condition": {
        type: String
    },
    "engine_condition": {
        type: String
    },
    "no_of_cylinder": {
        type: String
    },
    "fuel_type": {
        type: String
    },
    "horse_power": {
        type: String
    },
    "steering_side": {
        type: String
    },
    "seller_type": {
        type: String
    },
    "extras": {
        type: Array
    },
    "location": {
        type: String
    },
    "price": {
        type: Number
    },
    "call_for_price": {
        type: Boolean
    },
    "quantity": {
        type: Number
    },
})

export default mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);