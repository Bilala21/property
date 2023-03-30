import expressAsyncHandler from "express-async-handler";
import ConnectToDb from ".././dbConnection";
import PropertyForSale from "../model/PropertyForSale";
export const config = {
    api: {
        bodyParser: true,
    },
}
export default expressAsyncHandler(async (req, res) => {
    ConnectToDb();
    req.body.featured="for sale";
    const is_created = await PropertyForSale.create(req.body);
    if (is_created) {
        return res.send({ "status": 201, "message": "ok"});
    }
    return res.send({ "status": 403, "message": "forbidden" });
})