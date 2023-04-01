export const property_for_sale = {
    "property_type": {
        type: "select"
    },
    "developer": {
        type: "input"
    },
    "property_reference": {
        type: "input"
    },
    "occupancy_statuce": {
        type: "select",
        options:["vacant","occupaid"]
    },
    "seller_type": {
        type: "select",
        options:["landlord","owner"]
    },
    "zoned_for": {
        type: "input"
    },
    "bedrooms": {
        type: "select",
        options:[1,2,3,4,5],
        form:"residential-for-sale"
    },
    "bathrooms": {
        type: "select",
        options:[1,2,3,4,5],
        form:"residential-for-sale"
    },
    "community_fees": {
        type: "input"
    },
    "buyer_transfer_fess": {
        type: "input"
    },
    "seller_transfer_fess": {
        type: "input"
    },
    "maintenance_fess": {
        type: "input"
    },
    "freehold": {
        type: "select",
        options:["yes","no"]
    },
    "real_estate_agnet": {
        type: "input"
    }
}