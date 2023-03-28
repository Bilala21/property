import expressAsyncHandler from "express-async-handler";
import ConnectToDb from ".././dbConnection";
import bcrypt from "bcrypt"
import User from "../model/User";
export const config = {
    api: {
        bodyParser: true,
    },
}
export default expressAsyncHandler(async (req, res) => {
    ConnectToDb();
    const check_duplicate_email = await User.findOne({"email":req.body.email});
    if (check_duplicate_email) {
        return res.send({ "status": 409, "message": "Ues an other email"});
    }
    req.body.username = (req.body.name.toLowerCase()).replace(/\s/g, '');
    req.body.password = await bcrypt.hash(req.body.password,10);
    const data = await User.create(req.body);
    if (data) {
        return res.send({ "status": 201, "message": "ok", data });
    }
    return res.send({ "status": 403, "message": "forbidden" });
})