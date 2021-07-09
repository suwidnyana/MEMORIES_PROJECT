import mongoose from "mongoose";
import msg from "../utils/msg.js";
import dotenv from "dotenv";

dotenv.config();

function connectMongoose() {
  const uri = process.env.CONNECTION_URL;
  const PORT = process.env.PORT || 5000;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };
  return mongoose.connect(uri, options, (error) => {
    if (error) {
      msg.red("❌", `MongoDB connection error - retrying in 5 sec\n${error}`);
      setTimeout(connectMongoose, 5000);
    } else {
      msg.green("🚀", `MongoDB connection success in port ${PORT}`);
    }
  });
}

export default connectMongoose;

// mongoose.connect(uri, {
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// }).then(() => app.listen(PORT, () => {
//     msg.green('🚀', 'MongoDB connection success')
// }) )
//     .catch((error) => msg.red('❌', `MongoDB connection error - retrying in 5 sec\n${error}`));

// mongoose.set('useFindAndModify', false)
