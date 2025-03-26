import { useState } from "react";
import Category from "../component/Category";
import Dishes from "../component/Dishes";
import ScrollToTop from "../Scroll/ScrollToTop";

export default function Menu() {
    const [category,setCategory]=useState("All");
  return (
    <div className="mt-20 container mx-auto">
      <ScrollToTop/>
      <div className="flex justify-center items-center gap-3 py-6 font-bold text-4xl text-neutral-800">
        Explore Our 
        <span className="text-[#ff6b35]">Menu</span>
      </div>
      <Category category={category} setCategory={setCategory}/>
      <Dishes category={category}/>
    </div>
  );
}
