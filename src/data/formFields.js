export const property_for_sale = {
    // property for sale
    "property_type": {
        element: "select",
        label: "property_type",
        form_field: ["residential-for-sale",
            "commercial-for-sale",
            "commercial-for-rent",
            "residential-for-rent",
            "short-term-rent",
            "flatmate",
        ],
    },
    "size": {
        element: "input",
        type: "number",
        label: "size",
        form_field: ["residential-for-sale",
            "commercial-for-sale",
            "commercial-for-rent",
            "residential-for-rent",
            "short-term-rent",
        ],
    },
    "developer": {
        element: "input",
        type: "text",
        label: "developer",
        form_field: ["residential-for-sale", "commercial-for-sale"],
    },
    "property_reference": {
        element: "input",
        type: "text",
        label: "property_reference",
        form_field: ["residential-for-sale",
            "commercial-for-sale",
            "commercial-for-rent",
            "residential-for-rent",
            "short-term-rent",
            "flatmate",
        ],
    },
    "occupancy_statuce": {
        element: "select",
        label: "occupancy_statuce",
        form_field: ["residential-for-sale", "commercial-for-sale"],
        options: ["vacant", "occupaid"]
    },
    "seller_type": {
        element: "select",
        label: "seller_type",
        form_field: ["residential-for-sale", 
        "commercial-for-sale",
        "used-cars",
    ],
        options: ["landlord", "owner"]
    },
    "zoned_for": {
        element: "input",
        type: "text",
        label: "zoned_for",
        form_field: ["land-for-sale"],
    },
    "bedrooms": {
        element: "select",
        label: "Bedrooms",
        form_field: ["residential-for-sale",
            "residential-for-rent",
            "short-term-rent",            
        ],
        options: [1, 2, 3, 4, 5],
    },
    "bathrooms": {
        element: "select",
        label: "Bathrooms",
        form_field: ["residential-for-sale",
            "residential-for-rent",
            "short-term-rent",
            "flatmate",
        ],
        options: [1, 2, 3, 4, 5],
    },
    "community_fees": {
        element: "input",
        type: "number",
        label: "community_fees",
        form_field: ["residential-for-sale", "commercial-for-sale"],
    },
    "buyer_transfer_fees": {
        element: "input",
        type: "number",
        label: "buyer_transfer_fess",
        form_field: ["residential-for-sale", "commercial-for-sale"],
    },
    "seller_transfer_fess": {
        element: "input",
        type: "number",
        label: "seller_transfer_fess",
        form_field: ["residential-for-sale", "commercial-for-sale"],
    },
    "maintenance_fees": {
        element: "input",
        type: "number",
        label: "maintenance_fees",
        form_field: ["residential-for-sale", "commercial-for-sale"],
    },
    "freehold": {
        element: "select",
        label: "freehold",
        form_field: ["residential-for-sale", "commercial-for-sale"],
        options: ["yes", "no"]
    },
    "real_estate_agnet": {
        element: "input",
        type: "text",
        label: "real_estate_agnet",
        form_field: [
            "residential-for-sale", "commercial-for-sale",
            "residential-for-rent", "commercial-for-rent",
            "short-term-rent",
        ],
    },

    // property for rent
    "rent_is_paid": {
        element: "select",
        label: "rent_is_paid",
        form_field: ["residential-for-rent", "commercial-for-rent"],
    },
    "listed_by": {
        element: "select",
        label: "listed_by",
        form_field: ["residential-for-rent", "commercial-for-rent",
            "short-term-rent",
        ],
    },
    "contract_perion_in_month": {
        element: "input",
        type: "number",
        label: "contract_perion_in_month",
        form_field: ["residential-for-rent", "commercial-for-rent",
            "short-term-rent",
            "flatmate",
        ],
    },
    "notice_perion_in_month": {
        element: "input",
        type: "number",
        label: "notice_perion_in_month",
        form_field: ["residential-for-rent", "commercial-for-rent",
            "short-term-rent",
            "flatmate",
        ],
    },
    "furnished_unfurnished": {
        element: "select",
        label: "furnished_unfurnished",
        form_field: [
            "residential-for-rent",
            "commercial-for-rent",
        ],
    },
    "room_type": {
        element: "select",
        label: "room_type",
        form_field: [
            "flatmate",
        ],
    },
    "security_deposite": {
        element: "input",
        type: "number",
        label: "security_deposite",
        form_field: [
            "flatmate",
        ],
    },
    "no_of_tenants": {
        element: "input",
        type: "number",
        label: "no_of_tenants",
        form_field: [
            "flatmate",
        ],
    },
    "preferred_tenant_nationality": {
        element: "select",
        label: "preferred_tenant_nationality",
        form_field: [
            "flatmate",
        ],
    },
    "type_of_tenant_allowed": {
        element: "select",
        label: "type_of_tenant_allowed",
        form_field: [
            "flatmate",
        ],
    },

    // vehicles
    "maker": {
        element: "select",
        label: "maker",
        form_field: [
            "used-cars",
        ],
    },
    "model": {
        element: "select",
        label: "model",
        form_field: [
            "used-cars",
        ],
    },
    "year": {
        element: "select",
        label: "year",
        form_field: [
            "used-cars",
        ],
    },
    "warranty": {
        element: "select",
        label: "warranty",
        form_field: [
            "used-cars",
        ],
    },
    "regional_specs": {
        element: "select",
        label: "regional_specs",
        form_field: [
            "used-cars",
        ],
    },
    "transmission_type": {
        element: "select",
        label: "transmission_type",
        form_field: [
            "used-cars",
        ],
    },
    "body_type": {
        element: "select",
        label: "body_type",
        form_field: [
            "used-cars",
        ],
    },
    "body_condition": {
        element: "select",
        label: "body_condition",
        form_field: [
            "used-cars",
        ],
    },
    "engine_condition": {
        element: "select",
        label: "engine_condition",
        form_field: [
            "used-cars",
        ],
    },
    "no_of_cylinder": {
        element: "select",
        label: "no_of_cylinder",
        form_field: [
            "used-cars",
        ],
    },
    "fuel_type": {
        element: "select",
        label: "fuel_type",
        form_field: [
            "used-cars",
        ],
    },
    "steering_side": {
        element: "select",
        label: "steering_side",
        form_field: [
            "used-cars",
        ],
    },
    "doors": {
        element: "select",
        label: "doors",
        form_field: [
            "used-cars",
        ],
    },
    "kilometers": {
        element: "input",
        type:"number",
        label: "kilometers",
        form_field: [
            "used-cars",
        ],
    },
    "chassis_no": {
        element: "input",
        type:"text",
        label: "chassis_number",
        form_field: [
            "used-cars",
        ],
    },

}