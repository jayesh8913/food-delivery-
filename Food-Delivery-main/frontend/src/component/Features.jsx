import { IonIcon } from "@ionic/react";
import {timerOutline, cartOutline, cardOutline, locationOutline} from "ionicons/icons";
import { NavLink } from "react-router-dom";
export default function Features(){
    return(
    <section className="bg-white py-20">
        <div className="container px-4 mx-auto">
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold mb-4 text-neutral-800 font-poppins">
                    Why Choose
                    <span className="text-[#ff6b35]"> Feastify</span>
                </h2>
                <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Our app brings the best food delivery experience with these amazing features designed to make your life easier. 
                </p>
            </div>
            <div className="grid grid-cols-5 gap-1">
    
                <div className="bg-neutral-50 col-span-3 rounded-tl-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-[#ff6b35]/10 rounded-2xl flex items-center justify-center mb-6 ">
                    <IonIcon icon={timerOutline} size="large" className="text-[#ff6b35]"></IonIcon>
                    </div>
                    <h3 className="text-xl text-neutral-800 font-bold mb-3">Fast Delivery Promise</h3>
                    <p className="text-neutral-600 mb-4">
                    Experience lightning-fast delivery with our 30-minute delivery guarantee on eligible orders from select restaurants. 
                    </p>
                </div>

                <div className="bg-neutral-50 col-span-2 rounded-tr-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-[#2ec4b6]/10 rounded-2xl flex items-center justify-center mb-6 ">
                    <IonIcon icon={cartOutline} size="large" className="text-[#2ec4b6]"></IonIcon>
                    </div>
                    <h3 className="text-xl text-neutral-800 font-bold mb-3">Easy Order Management</h3>
                    <p className="text-neutral-600 mb-4">
                    Modify, schedule, or cancel orders with ease, plus save your favorite meals for quick reordering anytime. 
                    </p>
                </div>

                <div className="bg-neutral-50 col-span-2 rounded-bl-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-[#2ec4b6]/10 rounded-2xl flex items-center justify-center mb-6 ">
                    <IonIcon icon={cardOutline} size="large" className="text-[#2ec4b6]"></IonIcon>
                    </div>
                    <h3 className="text-xl text-neutral-800 font-bold mb-3">Flexible Payment Options</h3>
                    <p className="text-neutral-600 mb-4">
                    Pay your way with multiple secure payment methods, including credit cards, digital wallets, and cash on delivery. 
                    </p>
                </div>

                <div className="bg-neutral-50 col-span-3 rounded-br-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-[#ff6b35]/10 rounded-2xl flex items-center justify-center mb-6 ">
                    <IonIcon icon={locationOutline} size="large" className="text-[#ff6b35]"></IonIcon>
                    </div>
                    <h3 className="text-xl text-neutral-800 font-bold mb-3">Live Tracking</h3>
                    <p className="text-neutral-600 mb-4">
                    Know exactly where your food is with our precise GPS tracking system. Watch as your delivery approaches in real-time. 
                    </p>
                    
                </div>

            </div>
            <div className="mt-16">
                <div className="bg-linear-to-r from-[#ff6b35]/10 to-[#2ec4b6]/10 rounded-2xl p-12 ">
                    <div className="flex items-center">
                        <div className="w-3/5 pr-8">
                        <h3 className="text-neutral-800 text-3xl font-bold mb-4">Ready to experience the best food?</h3>
                        <p className="text-neutral-600 mb-6 ">Join millions of satisfied customers who enjoy delicious meals delivered right to their doorstep. Download the app now and get your first delivery fee waived! </p>
                        <NavLink className="bg-[#ff6b35] hover:bg-[#e55a29] text-white text-lg font-bold rounded-full px-6 py-3">Download Now</NavLink>
                        </div>
                        <div className="w-2/5 flex justify-center">
                        <div className="relative h-32 w-32 bg-white rounded-full shadow-xl">
                            <div className="absolute inset-0 bg-[#ff6b35] rounded-full opacity-20 animate-ping_slow "></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}