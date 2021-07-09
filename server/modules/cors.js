import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
export default (apps) => {
  apps.use(cors());
  apps.use(bodyParser.json({ limit: "30mb", extended: true }));
  apps.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  apps.listen(port);
};
