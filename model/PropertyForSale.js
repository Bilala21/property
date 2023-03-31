import mongoose from "mongoose";
import User from "../model/User";
import Category from "../model/Category";
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
    "category": {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    },
    "property_type_id": {
        type: mongoose.Schema.Types.ObjectId
    },
    "PostedBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    "title": {
        type: String
    },
    "country": {
        type: String
    },
    "city": {
        type: String
    },
    "is_saled": {
        type: Boolean,
        default: false
    },
    "views": {
        type: Number,
        default: 0
    },
    "description": {
        type: String
    },
    "condition": {
        type: String
    },
    "propety_type": {
        type: String
    },
    "featured": {
        type: String
    },
    "video_link": {
        type: String
    },
    "developer": {
        type: String
    },
    "property_reference": {
        type: String
    },
    "occupancy_statuce": {
        type: String
    },
    "seller_type": {
        type: String
    },
    "zoned_for": {
        type: String
    },
    "bedrooms": {
        type: Number
    },
    "bathrooms": {
        type: Number
    },
    "size": {
        type: Number
    },
    "community_fees": {
        type: Number
    },
    "buyer_transfer_fess": {
        type: Number
    },
    "seller_transfer_fess": {
        type: Number
    },
    "maintenance_fess": {
        type: Number
    },
    "freehold": {
        type: Boolean
    },
    "real_estate_agnet": {
        type: String
    },
    "amenties": {
        type: Array
    },
    "images": {
        type: Array
    },
    "neightbourhood": {
        type: Array
    },
    "price": {
        type: Number
    },
    "location": {
        type: String
    },
    "slug": {
        type: String,
        required: true
    },
    "freehold": {
        type: Boolean
    },
    "call_for_price": {
        type: Boolean,
    },
    "quantity": {
        type: Number,
    },

}, {
    timestamps: true
})


export default mongoose.models.PropertyForSale || mongoose.model("PropertyForSale", PropertySchema);