import cors from 'cors'
import bodyParser from 'body-parser'

import dotenv from 'dotenv'

dotenv.config();

export default apps  => {
    apps.use(cors())
    apps.use(bodyParser.json({limit: "30mb", extended: true}));
    apps.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
    apps.listen(process.env.PORT || 5000)
}