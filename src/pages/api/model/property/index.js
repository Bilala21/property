import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
    title: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    location: {
        type: String
    },
    size_prefix: {
        type: String
    },
    size_postfix: {
        type: String
    },
    developer: {
        type: String
    },
    description: {
        type: String
    },
    condition: {
        type: String
    },
    video_link: {
        type: String
    },
    county: {
        type: String
    },
    zip_code: {
        type: String
    },
    slug: {
        type: String,
        required: false
    },
    product_type_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    product_reference: {
        type: String
    },
    status: {
        type: String
    },
    seller_type: {
        type: String
    },
    real_estate_agent: {
        type: String
    },
    furnished_unfurnished: {
        type: String
    },
    rent_is_paid: {
        type: String
    },
    listed_by: {
        type: String
    },
    daily_monthly: {
        type: String
    },
    room_type: {
        type: String
    },
    preferred_tenant_nationality: {
        type: String
    },
    type_of_tenant_allowed: {
        type: String
    },
    type_of_tenant_allowed: {
        type: String
    },
    quantity: {
        type: Number
    },
    mini_contract_perion_in_month: {
        type: Number
    },
    notice_period_in_month: {
        type: Number
    },
    security_deposite: {
        type: Number
    },
    community_fees: {
        type: Number
    },
    buyer_transfer_fees: {
        type: Number
    },
    seller_transfer_fees: {
        type: Number
    },
    maintenance_fees: {
        type: Number
    },
    bedrooms: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    no_of_tenant: {
        type: Number
    },
    size: {
        type: Number
    },
    price: {
        type: Number
    },
    call_for_price: {
        type: Boolean
    },
    freehold: {
        type: Boolean
    },
    address: {
        type: Array
    },
    images: {
        type: Array
    },
    neighborhood: {
        type: Array
    },
    amenties: {
        type: Array
    },
    is_saled: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    },
    "owner_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
    }
})

export default mongoose.models.Property || mongoose.model("Property", PropertySchema);