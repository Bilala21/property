import { IncomingForm } from 'formidable';
import expressAsyncHandler from "express-async-handler";
import mv from "mv";
import PropertForSale from "../../../../model/PropertyForSale"
import PropertyForRent from "../../../../model/PropertyForRent"
import slugify from 'slugify';
import ConnectToDb from '../../../../dbConnection';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default expressAsyncHandler(async (req, res) => {
  ConnectToDb();
  await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      Object.keys(files).forEach((index) => {
        var oldPath = files[index].filepath;
        var newPath = `./public/uploads/${files[index].originalFilename}`;
        mv(oldPath, newPath, async function (err) {
          if (!err) {
            let data = undefined;
            fields.slug = slugify(fields.propety_type.toLocaleLowerCase());
            fields.category = slugify(fields.category_id.toLocaleLowerCase());
            delete fields.category_id;
            if (Object.keys(req.query)[0] === "property-for-sale") {
              fields.featured = "for sale";
              data = await PropertForSale.create(fields);
            }
            if (Object.keys(req.query)[0] === "property-for-rent") {
              fields.featured = "for rent";
              data = await PropertyForRent.create(fields);
            }
            if (data) {
              return res.send({ "status": 201, "message": "ok" });
            }
            else {
              return res.send({ "status": 403, "message": "forbidden" });
            }
          }
        });
      })
    })
  })
})

