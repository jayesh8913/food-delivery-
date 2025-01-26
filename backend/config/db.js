import mongoose from "mongoose";

export const connect = async()=>{
    await mongoose.connect('mongodb+srv://jayeshpatil030405:jayesh@cluster0.bxwe3.mongodb.net/food-delevery').then(()=>{console.log("db connected ")});
}


