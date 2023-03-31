import expressAsyncHandler from "express-async-handler";
import ConnectToDb from '../../../dbConnection';
import Vehilce from "../../../model/Vehicles";
import PropertyForSale from "../../../model/PropertyForSale";
import PropertyForRent from "../../../model/PropertyForRent";
import Category from "../../../model/Category";
export const config = {
    api: {
        bodyParser: true,
    },
}
export default expressAsyncHandler(async (req, res) => {
    ConnectToDb();
    let propertyForSale = await PropertyForSale.find({}).populate('PostedBy').lean();
    let categories = await Category.find({}).lean();
    if (propertyForSale) {
        return res.send({ "status": 200, "message": "ok",products:{propertyForSale,categories}});
    }
    return res.send({ "status": 404, "message": "Not found", data: [] });
    // return res.send({ "status": 404, "message": "Not found", data: [] });
})