import { useLocation, useNavigate } from "react-router-dom";
import Login from "../component/Login";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function SignIn(){
    const location = useLocation();
    useEffect(() => {
        if (location.state?.error) {
            toast.error(location.state.error);
        }
    }, [location]);
    return(
        <section  className="flex items-center">
            <div className="hidden md:block md:w-1/2 md:h-screen bg-[url('src/assets/image.png')] md:bg-cover" >
            </div>
            <div className="w-full md:w-1/2 h-screen flex justify-center items-center bg-linear-to-br from-[#ff6b35]/10 to-[#2ec4b6]/10">
                <Login/>
            </div>
        </section>
    )
}