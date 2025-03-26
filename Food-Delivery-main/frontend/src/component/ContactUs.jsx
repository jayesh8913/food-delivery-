import { IonIcon } from "@ionic/react";
import {callOutline,mailOutline,locationOutline} from "ionicons/icons"

export default function ContactUs(){
    return(
        <section id="ContactUs" className="py-20 bg-neutral-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Get In 
                        <span className="text-[#ff6b35]"> Touch</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">Have questions, feedback, or need assistance? We're here to help.</p>
                </div>
                {/* contact info */}
                    <div className="flex justify-evenly items-stretch">
                        {/* phone */}
                        <div className="bg-neutral-800 p-8 rounded-2xl ">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#ff6b35]/10 text-[#ff6b35] rounded-lg flex items-center justify-center">
                                    <IonIcon icon={callOutline} size="large"></IonIcon>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-neutral-100">
                                            Phone Support
                                        </h4>
                                        <p className="text-neutral-400 mb-1">Monday-Friday: 24/7</p>
                                        <p className="text-neutral-400 mb-1">Weekends: 9am-6pm</p>
                                        <a href="tel:+911234567890" className="text-[#FF6B35] font-medium hover:underline">+91 123 456 7890</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* email */}
                        <div className="bg-neutral-800 p-8 rounded-2xl ">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#2EC4B6]/10 text-[#2EC4B6] rounded-lg flex items-center justify-center">
                                    <IonIcon icon={mailOutline} size="large"></IonIcon>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-neutral-100">
                                            Email Us
                                        </h4>
                                        <p className="text-neutral-400 mb-1">Response time: 24 hours</p>
                                        <a href="mailto:support@feastify.com" className="text-[#2EC4B6] font-medium hover:underline">support@feastify.com</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* Headquarter*/}
                        <div className="bg-neutral-800 p-8 rounded-2xl ">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#ff6b35]/10 text-[#ff6b35] rounded-lg flex items-center justify-center">
                                    <IonIcon icon={locationOutline} size="large"></IonIcon>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-neutral-100">
                                            Headquarters
                                        </h4>
                                        <p className="text-neutral-400 mb-1">123 Food Street</p>
                                        <p className="text-neutral-400 mb-1">San Francisco, CA 94105</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}