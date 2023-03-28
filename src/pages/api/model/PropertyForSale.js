import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
    "title": {
        type: String
    },
    "country": {
        type: String
    },
    "city": {
        type: String
    },
    "property_type_id": {
        type: mongoose.Schema.Types.ObjectId
    },
    "is_saled": {
        type: Boolean,
        default: false
    },
    "views": {
        type: Number,
        default: 0
    },
    "PostedBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    "category_id": {
        type: mongoose.Schema.Types.ObjectId,
    },
    "description": {
        type: String
    },
    "condition": {
        type: String
    },
    "featured": {
        type: String
    },
    "type": {
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
    "real_estate_agnet": {
        type: String
    },
    "location": {
        type: String
    },
    "zoned_for": {
        type: String
    },
    "slug": {
        type: String,
        required:true
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
    "price": {
        type: Number
    },
    "quantity": {
        type: Number
    },
    "freehold": {
        type: Boolean
    },
    "call_for_price": {
        type: Boolean
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

},{
    timestamps:true
})

export default mongoose.models.PropertyForSale || mongoose.model("PropertyForSale", PropertySchema);