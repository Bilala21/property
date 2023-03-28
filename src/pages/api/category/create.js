import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";
import ConnectToDb from "../dbConnection";
import Category from "../model/Category";
export const config = {
    api: {
        bodyParser: true,
    },
}
export default expressAsyncHandler(async (req, res) => {

    ConnectToDb();
    let data = undefined;
    switch (req.method) {

        case "POST":
            req.body.slug = slugify(req.body.name.toLowerCase());
            if (req.body.category_id === undefined && req.body.product_type_id === undefined) {
                data = await Category.create(req.body);
            }
            else if (req.body.category_id !== undefined && req.body.product_type_id === undefined) {
                const category = await Category.findById(req.body.category_id);
                delete req.body.category_id;
                category.subCategory.push(req.body);
                data = await category.save();
            }
            else if (req.body.category_id !== undefined && req.body.product_type_id !== undefined) {
                const category = await Category.findById(req.body.category_id);
                delete req.body.category_id;
                const sub_category = category.subCategory.id(req.body.product_type_id);
                delete req.body.product_type_id;
                sub_category.productType.push(req.body);
                data = await category.save();
            }
            if (data) {
                return res.send({ "status": 201, "message": "ok", data })
            }
            return res.send({ "status": 403, "message": "not ok" })

        case "GET":
            const data = await Category.find({}).lean();
            if (data) {
                return res.send({ "status": 201, "message": "ok", data })
            }
            return res.send({ "status": 403, "message": "not ok" })

        default:
            res.send({ "message": "Hello from default" });
            break;
    }
})

