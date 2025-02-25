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
        res.status(400).json({success:false,messgae:"error"})
    }
}
//all food lsit
const listfood =async ()=>{
    try{
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})  
    }catch (error){
        console.log(error);
        res.json({sucess:false,message:"error"})
    }
}


//remove food
const removefood=async (req,res)=>{
   try{
    const food = await foodModel.findById(req.body.is)

   }catch(error){

   }
}
export {addfood,listfood,removefood}