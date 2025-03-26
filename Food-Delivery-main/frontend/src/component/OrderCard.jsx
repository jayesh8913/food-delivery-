import React from "react";
import { IonIcon } from "@ionic/react";
import { restaurantOutline, pintOutline } from "ionicons/icons";

const OrderCard = () => {
  return (
    <div className=" w-lg h-120 relative">
      <div className="bg-[#2ec4b6]/20 w-64 h-64 absolute -top-15 -right-15 rounded-full blur-3xl"></div>
      <div className="bg-[#ff6b35]/20 w-64 h-64 absolute -bottom-15 -left-15  blur-3xl rounded-full "></div>
      <div className=" w-full h-full ">
        <div className="relative z-10 bg-neutral-800 w-full h-full p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="bg-neutral-700 rounded-2xl p-4 w-full h-full -rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="bg-neutral-800 rounded-xl shadow-lg h-full w-full">
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-lg">Your Order</h3>
                    <p className="text-gray-400 text-sm">#69786</p>
                  </div>
                  <div className="bg-[#2ec4b6]/20 text-[#2ec4b6] px-3 py-1 text-xs rounded-full font-bold">
                    On the way
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mb-5 flex gap-3">
                    <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-lg flex items-center justify-center ">
                      <IonIcon
                        icon={restaurantOutline}
                        size="large"
                        className="text-[#ff6b35]"
                      ></IonIcon>
                    </div>
                    <div>
                      <p className="font-medium">Paneer Masala</p>
                      <p className="text-gray-400 text-sm">1 x ₹240</p>
                    </div>
                  </div>
                  <div className="mb-8 flex gap-3">
                    <div className="w-12 h-12 bg-[#2ec4b6]/20 rounded-lg flex items-center justify-center ">
                      <IonIcon
                        icon={pintOutline}
                        size="large"
                        className="text-[#2ec4b6]"
                      ></IonIcon>
                    </div>
                    <div>
                      <p className="font-medium">Coke</p>
                      <p className="text-gray-400 text-sm">2 x ₹60</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2 text-gray-400 text-sm">
                      <p>Subtotal</p>
                      <p>₹360</p>
                    </div>
                    <div className="flex justify-between mb-2 text-gray-400 text-sm">
                      <p>Delivery</p>
                      <p>₹40</p>
                    </div>
                    <div className="flex justify-between mb-2 font-bold">
                      <p>Total</p>
                      <p>₹400</p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-neutral-700 rounded-lg p-3 flex">
                      <div className="w-8 h-8 rounded-full bg-[#ff6b35]/30"></div>
                      <div className="bg-neutral-500/20 mx-3 my-1 grow rounded-lg"></div>
                      <div className="w-8 h-8 rounded-full bg-[#2ec4b6]/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
