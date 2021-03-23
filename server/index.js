import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js'


import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes );




// const CONNECTION_URL = 'mongodb+srv://root:root@cluster0.ajmjw.mongodb.net/memories?retryWrites=true&w=majority'
const uri =  process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
}) )
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)