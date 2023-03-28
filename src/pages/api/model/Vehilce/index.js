import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    title: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    vehicle_type:{
        type:String
    },
    age:{
        type:String
    },
    boat_length:{
        type:String
    },
    boat_engine:{
        type:String
    },
    number_plate_code:{
        type:String
    },
    inboard_outboard:{
        type:String
    },
    vehicle_manufacturer:{
        type:String
    },
    usages:{
        type:String
    },
    palte_design:{
        type:String
    },
    final_driven_system:{
        type:String
    },
    vehicle_power:{
        type:Number
    },
    wheel:{
        type:Number
    },
    number_of_digit:{
        type:Number
    },
    plate_number:{
        type:Number
    },
    vehicle_sub_type:{
        type:String
    },
    location: {
        type: String
    },
    video_link: {
        type: String
    },
    model: {
        type: String
    },
    warranty: {
        type: String
    },
    color: {
        type: String
    },
    redional_specs: {
        type: String
    },
    chassis_number: {
        type: String
    },
    transmission_type: {
        type: String
    },
    body_type: {
        type:String
    },
    body_condition: {
        type: String
    },
    engine_condition: {
        type: String
    },
    fuel_type: {
        type: String
    },
    steering_type: {
        type: String
    },
    seller_type: {
        type: String
    },
    views: {
        type: Number
    },
    capacity_weight: {
        type: Number
    },
    doors: {
        type: Number
    },
    no_of_cylinder: {
        type: Number
    },
    year: {
        type: Number
    },
    kilometers: {
        type: Number
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    neighborhood: {
        type: Array
    },
    extras: {
        type: Array
    },
    is_saled: {
        type: Boolean,
        default: false
    },
    call_for_price: {
        type: Boolean,
        default: false
    },
    "owner_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
    }
});

export default mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);