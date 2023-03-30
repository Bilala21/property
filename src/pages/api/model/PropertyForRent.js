import mongoose from "mongoose";
import User from "./User";
import Category from "./Category";
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
    "property_type_id": {
        type: mongoose.Schema.Types.ObjectId
    },
    "PostedBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    "category_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref:Category
    },
    "is_saled": {
        type: Boolean,
        default: false
    },
    "views": {
        type: Number,
        default: 0
    },
    "country": {
        type: String
    },
    "city": {
        type: String
    },
    "title": {
        type: String
    },
    "condition": {
        type: String
    },
    "neighbourhood": {
        type: Array
    },
    "video_link": {
        type: String
    },
    "property_type": {
        type: String
    },
    "daily_monthly": {
        type: String
    },
    "bedrooms": {
        type: Number
    },
    "contract_period_in_month": {
        type: Number
    },
    "notice_period_in_month": {
        type: Number
    },
    "security_deposite": {
        type: Number
    },
    "room_type": {
        type: String
    },
    "no_of_tenants": {
        type: Number
    },
    "preferred_tenant_nationality": {
        type: String
    },
    "type_of_tenant": {
        type: String
    },
    "bathrooms": {
        type: Number
    },
    "size": {
        type: Number
    },
    "furnished_unfurnished": {
        type: String
    },
    "rent_is_paid": {
        type: String
    },
    "property_reference": {
        type: String
    },
    "listed_by": {
        type: String
    },
    "real_estate_agent": {
        type: String
    },
    "slug": {
        type: String
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
    "amenties": {
        type: Array
    },

}, {
    timestamps: true
})

export default mongoose.models.PropertyForRent || mongoose.model("PropertyForRent", PropertySchema);