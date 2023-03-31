import expressAsyncHandler from "express-async-handler";
import ConnectToDb from '../../../../dbConnection';
import Vehilce from "../../../../model/Vehicles";
import Category from "../../../../model/Category";
import PropertyForSale from "../../../../model/PropertyForSale";
import PropertyForRent from "../../../../model/PropertyForRent";
export const config = {
    api: {
        bodyParser: true,
    },
}
export default expressAsyncHandler(async (req, res) => {
    ConnectToDb();
    const slug = Object.keys(req.query)[0];
    if (slug === "property-for-sale") {
        let propertyForSale = await PropertyForSale.find({}).populate('PostedBy').populate("category").lean();
        if (propertyForSale) {
            return res.send({ "status": 200, "message": "ok", propertyForSale});
        }
    }
    return res.send({ "status": 404, "message": "Not found", data: [] });
    // return res.send({ "status": 404, "message": "Not found", data: [] });
})