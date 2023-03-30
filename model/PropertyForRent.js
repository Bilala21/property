import mongoose from "mongoose";
import User from "./User";
import Category from "./Category";
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
    "category_id": {
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
    "slug": {
        type: String
    },
    "neightbourhood": {
        type: Array
    },
    "video_link": {
        type: String
    },
    "bedrooms": {
        type: Number
    },
    "daily_monthly": {
        type: String
    },
    "preferred_tenant_nationality": {
        type: String
    },
    "type_of_tenant_allowed": {
        type: String
    },
    "roome_type": {
        type: String
    },
    "bathrooms": {
        type: Number
    },
    "no_of_tenants": {
        type: Number
    },
    "security_deposite": {
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
    "amenties": {
        type: Array
    },
    "images": {
        type: Array
    },
    "location": {
        type: String
    },
    "price": {
        type: Number
    },
    "contract_perion_in_month": {
        type: Number
    },
    "notice_perion_in_month": {
        type: Number
    },
    "call_for_price": {
        type: Boolean
    },
    "quantity": {
        type: Boolean
    },

}, {
    timestamps: true
})

export default mongoose.models.PropertyForSale || mongoose.model("PropertyForSale", PropertySchema);