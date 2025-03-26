import { NavLink } from "react-router-dom";
import OrderCard from "./OrderCard";

export default function Hero() {
  return (
    <section id="Hero" className="bg-neutral-900 text-white pt-36 pb-14 min-h-[70vh] flex items-center font-poppins">
      <div className="container  mx-auto px-4 flex gap-8 ">
        <div className="w-[40vw] ">
          <h1 className="flex flex-col text-6xl font-bold leading-tight font-poppins">
            <span className="text-[#FF6B35] ">Delicious Food</span>
            <span>Delivered To </span>
            <span> Your Door </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 mt-4">Fast delivery, fresh ingredients, and your favorite local restaurants — all in one app. Order in just a few taps! </p>
          <div className="flex gap-8">
            <NavLink className="bg-[#FF6B35] hover:bg-[#E55A29] py-3 px-5  font-normal rounded-4xl text-lg">Download App</NavLink>
            <NavLink to="/menu" className="bg-transparent hover:bg-[#2EC4B6]/20 border-2 text-[#2EC4B6] py-3 px-6 font-normal rounded-4xl text-lg">View Menu</NavLink>
          </div>
        </div>
        <OrderCard/>
      </div>
    </section>
  );
}
