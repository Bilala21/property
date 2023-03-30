import expressAsyncHandler from "express-async-handler";
import ConnectToDb from "./dbConnection";
import Vehilce from "./model/Vehilce";
import Category from "./model/Category";
import PropertyForSale from "./model/PropertyForSale";
import PropertyForRent from "./model/PropertyForRent";
export const config = {
    api: {
        bodyParser: true,
    },
}
export default expressAsyncHandler(async (req, res) => {
    ConnectToDb();
    const slug = Object.keys(req.query)[0];
    if (slug === "property-for-sale") {
        let propertyForSale = await PropertyForSale.find({}).populate("PostedBy").lean();
        const categories = await Category.find({}).lean();
        if (propertyForSale) {
            return res.send({ "status": 200, "message": "ok", categories, propertyForSale});
        }
        return res.send({ "status": 404, "message": "Not found", data: [] });
    }
    const vehicles = await Vehilce.find({}).lean();
    const propertyForSale = await PropertyForSale.find({}).lean();
    const propertyForRent = await PropertyForRent.find({}).lean();
    const categories = await Category.find({}).lean();
    if (vehicles) {
        return res.send({ "status": 200, "message": "ok", vehicles, propertyForSale, propertyForRent, categories });
    }
    return res.send({ "status": 404, "message": "Not found", data: [] });
})