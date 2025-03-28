import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const {token, admin, setAdmin, setToken } = useContext(StoreContext);
  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logout Successfully")
    navigate("/");
  }
  return (
    <div className="navbar">
      <span className="text-3xl font-bold text-[#ff6b35]">Feastify</span>
      {token && admin ? (
        <p className="text-2xl" onClick={logout}>Logout</p>
      ) : (
        <p className="text-2xl" onClick={()=>navigate("/")}>Login</p>
      )}
      
    </div>
  );
};

export default Navbar;
