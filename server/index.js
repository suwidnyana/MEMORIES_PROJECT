import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

import apps from "./modules/cors.js";
import connectMongoose from "./modules/mongoose.js";
import router from "./routes/index.js";

// import postRoutes from './routes/posts.js';
// import userRoutes from './routes/user.js'

// app.use(express.json({limit: "30mb", extended: true}));
// app.use(express.urlencoded({limit: "30mb", extended: true}));

// app.use(cors());

// app.use('/posts', postRoutes);
// app.use('/user', userRoutes );

app.get("/", (req, res) => {
  res.send("Hello to memories API");
});

const corss = apps(app);
const mongooseexecute = connectMongoose();
const routers = router(app);
