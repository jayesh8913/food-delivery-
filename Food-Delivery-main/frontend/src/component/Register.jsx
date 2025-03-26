import { IonIcon } from "@ionic/react";
import { mailOutline, keyOutline, personOutline } from "ionicons/icons";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const {url,setToken}=useContext(StoreContext);
  const newUrl=url+"api/user/register"
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(newUrl, data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        navigate("/", { state: { type: "success", message: "Registeration Successful!" } });
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Registeration failed! Please try again.");
    }
    
  };

  return (
    <div className="w-[90vw] md:w-[30vw] bg-white shadow-sm focus:shadow-md transition-shadow duration-500 rounded-xl p-6 relative overflow-hidden">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <IonIcon icon={personOutline} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Name can only contain letters and spaces",
              },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
            onBlur={() => trigger("name")}
            className="w-full outline-none"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                message:
                  "Password must contain at least one uppercase letter and one special character",
              },
            })}
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
        Already have an account?{" "}
        <NavLink to="/login" className="text-[#2ec4b6]">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}
