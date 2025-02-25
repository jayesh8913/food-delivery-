// making a model to add food schema
import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    Image:{type:String,required:true},       // url will be stored as a string
    price:{type:Number,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
})

const foodModel= mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;
