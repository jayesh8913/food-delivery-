import express from "express";
import cors from "cors";
import { connect } from "./config/db.js";
import foodRoute from "./routes/foodroute.js";

const app = express();
const port = 4000;

// middleware 
app.use(express.json());
app.use(cors());

// connect db 
connect();

// api endpt 
app.use("/api/food",foodRoute)
app.use("/images",express.static('uploads'))

app.get("/", (req,res)=>{
    res.send("working")
})

app.listen(port, ()=>{
    console.log(`server is running on https://localhost:${port}`)
});