import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductTypeSchema = new Schema({
    "name": { type: String, required: true },
    "slug": { type: String, required: true },
});

const SubCategorySchema = new Schema({
    "name": { type: String, required: true },
    "slug": { type: String, required: true },
    "productType": { type: [ProductTypeSchema] }
});

const CategorySchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "slug": {
        type: String,
        required: true
    },
    "subCategory": {
        type: [SubCategorySchema]
    }
});
export default mongoose.models.Category || mongoose.model("Category", CategorySchema);