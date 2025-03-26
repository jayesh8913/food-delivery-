import { NavLink } from "react-router-dom";

export default function DiscountCoupon(){
    return(
        <div className="bg-neutral-50 rounded-3xl">
          <div className="flex">
            <div className="p-12 w-1/2">
              <div className="flex">
                <div className="bg-[#ff6b35]/10 px-5 py-1 text-sm font-bold text-[#ff6b35] rounded-3xl mb-4">
                  Limited Time Offer
                </div>
              </div>
              <div className="text-3xl font-bold text-neutral-800 mb-3">
                First Order? Get 50% Off!
              </div>
              <div className="text-neutral-600 mb-6">
              New users can enjoy half off their first order (up to ₹200). Use promo code <span className="font-bold text-neutral-600">FIRSTBITE </span> 
              at checkout.
              </div>
              <div className="flex gap-6 items-center mb-6">
                <NavLink className="bg-[#ff6b35] text-white font-bold text-lg px-6 py-2 rounded-3xl ">Claim Offer</NavLink>
                <NavLink className="bg-white text-neutral-700 font-bold text-lg px-6 py-2 border border-neutral-400 rounded-3xl ">View Terms</NavLink>
              </div>
              <div className="text-sm text-neutral-500">*Offer valid for new users only. Expires 30 days after sign-up.</div>
            </div>
            <div className="grow rounded-r-3xl bg-[#ff6b35]/5 relative overflow-hidden flex justify-center items-center">
                <div className="absolute w-64 h-64 -bottom-16 -right-16 bg-[#ff6b35]/10 rounded-full "></div>
                <div className="absolute -left-10 -top-10 w-48 h-48 bg-[#2ec4b6]/10 rounded-full"></div>
                <div className="h-48 w-40 bg-white z-10 rounded-2xl -rotate-4 hover:rotate-0 transition-transform duration-500 ">

                </div>
            </div>
          </div>
        </div>
    )
}