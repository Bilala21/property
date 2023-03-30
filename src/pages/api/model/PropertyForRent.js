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
    "product_type_id": {
        type: mongoose.Schema.Types.ObjectId
    },
    "owner_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    "category_id": {
        type: mongoose.Schema.Types.ObjectId,
    },
    "description": {
        type: String
    },
    "featured": {
        type: String
    },
    "type": {
        type: String
    },
    "condition": {
        type: String
    },
    "video_link": {
        type: String
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
    "monthly_daily": {
        type: String
    },
    "room_type": {
        type: String
    },
    "preferred_tenant_nationality": {
        type: String,
    },
    "type_of_tenant_allowed": {
        type: String,
    },
    "slug": {
        type: String,
        required:true
    },
    "views": {
        type: Number,
        default: 0
    },
    "bedrooms": {
        type: Number,
    },
    "bathrooms": {
        type: Number,
    },
    "size": {
        type: Number,
    },
    "price": {
        type: Number,
    },
    "quantity": {
        type: Number,
    },
    "mini_contract_period_in_month": {
        type: Number,
    },
    "notice_period_in_month": {
        type: Number,
    },
    "security_deposite": {
        type: Number,
    },
    "no_of_tenants": {
        type: Number,
    },
    "is_saled": {
        type: Boolean,
        default: false
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

},
{
    timestamps:true
}
)

export default mongoose.models.Property || mongoose.model("Property", PropertySchema);