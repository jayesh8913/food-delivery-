import { IonIcon } from "@ionic/react";
import { mailOutline, keyOutline } from "ionicons/icons";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const navigate = useNavigate();
  const {url,setToken}=useContext(StoreContext);
  const newUrl=url+"api/user/login"
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(newUrl, data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        navigate("/", { state: { type: "success", message: "Successfully Logged In!" } });
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Login failed! Please try again.");
    }
  };

  return (
    <div className="w-[90vw] md:w-[30vw] bg-white shadow-sm focus:shadow-md transition-shadow duration-500 rounded-xl p-6 relative overflow-hidden">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <IonIcon icon={mailOutline} className="text-gray-500 mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            onBlur={() => trigger("email")}
            className="w-full outline-none"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <div className="flex items-center border rounded-lg px-3 py-2">
          <IonIcon icon={keyOutline} className="text-gray-500 mr-2" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            onBlur={() => trigger("password")}
            className="w-full outline-none"
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#ff6b35] text-white py-2 rounded-lg hover:bg-[#e65a2d] transition"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Don't have an account?{" "}
        <NavLink to="/register" className="text-[#2ec4b6]">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
}
