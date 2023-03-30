import expressAsyncHandler from "express-async-handler";
import ConnectToDb from "../dbConnection";
import Vehilce from "../model/Vehilce";
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
            data = await getFilterdProducts(req, res)
            if (data.length) {
                return res.send({ "status": 200, "message": "ok", data });
            }
            return res.send({ "status": 404, "message": "Not found" });
        case "GET":
            data = await Vehilce.find({}).lean();
            if (data) {
                return res.send({ "status": 200, "message": "ok", data });
            }
            return res.send({ "status": 404, "message": "Not found" });
        default:
            return res.send({ "status": 403, "message": "forbidden" });
    }
})
const getFilterdProducts = async (req, res) => {
    let data = undefined;
    const maxprice = req.body.maxprice;
    const minprice = req.body.minprice;

    const maxsize = req.body.maxsize;
    const minsize = req.body.minsize;

    delete req.body.limit

    delete req.body.maxsize;
    delete req.body.minsize;

    delete req.body.maxprice;
    delete req.body.minprice;

    const pageOptions = {
        page: parseInt(req.body.page) || 0,
        limit: parseInt(req.body.limit) || 20,
    };

    const price = [
        minprice ? { price: { $gt: minprice } } : {},
        maxprice ? { price: { $lt: maxprice } } : {},
    ];

    const size = [
        minsize ? { size: { $gt: minsize } } : {},
        maxsize ? { size: { $lt: maxsize } } : {},
    ];

    const filters = { ...req.body, $and: [...price, ...size] };
    data = await Vehilce.find(filters)
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({ created_at: -1 })
        .lean();
    return data;

}