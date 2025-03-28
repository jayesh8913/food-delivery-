import { useContext, useState } from "react"
import FoodCard from "./FoodCard"
import { StoreContext } from "../context/StoreContext";
import axios from "axios";


export default function Dishes({category}){
    const {foodlist}=useContext(StoreContext);
  
    return(
        <div className="mt-6 grid grid-cols-3 gap-2">
            {
                foodlist.filter((li)=>{
                    return category==="All" || category===li.category
                }).map((li)=>{
                    return <FoodCard key={li._id} item={li} popularDish={false}/>
                })
            }
        </div>
    )
}