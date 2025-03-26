import { useContext, useState } from "react"
import { food_list } from "../assets/assets"
import FoodCard from "./FoodCard"
import { StoreContext } from "../context/StoreContext";
import axios from "axios";


export default function Dishes({category}){
    const {url} =useContext(StoreContext);
    const newUrl=url+"api/food/list";
  
    return(
        <div className="mt-6 grid grid-cols-3 gap-2">
            {
                food_list.filter((li)=>{
                    return category==="All" || category===li.category
                }).map((li)=>{
                    return <FoodCard key={li._id} item={li} popularDish={false}/>
                })
            }
        </div>
    )
}