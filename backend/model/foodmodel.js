import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:String,
    Image:String,       // url will be stored as a string
    price:Number,
    description:String,
    category:String,
})

const foodModel= mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;
