import express from "express";
import addfood from "../controller/foodcontroller.js";
import multer from "multer";

const foodRoute = express.Router();

// img storage

const storage =multer.diskStorage({
    destination:"uploads" ,
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRoute.post("/add",upload.single("image"),addfood);

export default foodRoute;
