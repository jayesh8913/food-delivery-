import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";
import DiscountCoupon from "./DiscountCoupon";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";

export default function PopularDishes() {
  return (
    <section className="py-4 mb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-neutral-800">
            Popular
            <span className="text-[#ff6b35] "> Dishes</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Discover top-rated restaurants in your area, with thousands of
            delicious options just a few taps away.{" "}
          </p>
        </div>
        {/* carousel */}
        <Carousel />
        <div className="flex justify-center items-center mb-12">
          <NavLink to="/menu" className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-bold py-3 px-8 rounded-full transition duration-300 text-lg flex gap-2 items-center justify-center">
            <div>Browse More Dishes</div>
            <div className="relative top-1">
              <IonIcon icon={chevronDownOutline}></IonIcon>
            </div>
          </NavLink>
        </div>
        {/* Discount coupon */}
        <DiscountCoupon/>
      </div>
    </section>
  );
}
