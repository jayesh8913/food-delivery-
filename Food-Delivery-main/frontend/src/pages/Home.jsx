
import Features from "../component/Features";
import Hero from "../component/Hero";
import PopularDishes from "../component/PopularDishes";
import ContactUs from "../component/ContactUs";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";



export default function Home(){
    const location = useLocation();
    useEffect(() => {
        if (location.state?.message) {
            toast.success(location.state.message);
        }
    }, []);
    return(
        <div >
            <Hero/>
            <Features/>
            <PopularDishes/>
            <ContactUs/>
        </div>
    )
}