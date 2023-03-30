import expressAsyncHandler from "express-async-handler";
import ConnectToDb from "../dbConnection";
import Property from "../model/property";
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
            if ("filter" in req.query) {
                data = await getFilterdProducts(req, res)
                if (data.length) {
                    return res.send({ "status": 200, "message": "ok", data });
                }
                return res.send({ "status": 404, "message": "Not found" });
            }

            data = await Property.create(req.body);
            if (data) {
                return res.send({ "status": 201, "message": "ok", data });
            }
            return res.send({ "status": 403, "message": "forbidden" });


        case "GET":
            data = await Property.find({}).lean();
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
    data = await Property.find(filters)
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({ created_at: -1 })
        .lean();
    return data;

}