import foodModel from "../model/foodmodel.js";
import fs from "fs";

const addfood = async (req,res)=>{
    let img_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:img_filename
    })    

    try{
        await food.save();
        res.status(200).json({success:true,messgae:"food added"})

    }   catch(error){
        res.json({success:false,messgae:"error"})
    }
}

export default addfood