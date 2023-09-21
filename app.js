import express from 'express';
import mongoose from 'mongoose';

import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();


app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);


mongoose.connect("mongodb+srv://admin:HVCMxwYRWFfHcZ3g@cluster0.iabeaf5.mongodb.net/social?retryWrites=true&w=majority").then(()=>app.listen(5000)).then(()=>console.log("connect to database and listeninng to port 5000"))
.catch((err)=>console.log(err));


//  HVCMxwYRWFfHcZ3g password md;