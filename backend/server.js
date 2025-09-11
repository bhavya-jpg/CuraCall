import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCLoudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCLoudinary()

//middleware
app.use(express.json());
app.use(cors());

//api end point
app.use('/api/admin',adminRouter)



app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("server started", port));
