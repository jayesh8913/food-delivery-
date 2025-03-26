import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {personCircleOutline, bagOutline, logOutOutline} from "ionicons/icons"
import { search } from "ionicons/icons";
import { StoreContext } from "../context/StoreContext";

export default function Navbar() {
  const navigate= useNavigate();
  const { token, setToken } = useContext(StoreContext);
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="px-4 py-3  flex justify-around items-center">
        <NavLink to="/" className="text-3xl font-extrabold text-[#E66E43]">
          Feastify
        </NavLink>
        <div className="w-1/5 px-4 py-1 rounded-2xl flex items-center gap-4 text-gray-400 hover:text-[#E66E43] border border-gray-400 hover:border-[#E66E43] cursor-pointer shadow-sm">
          <IonIcon icon={search} size="small"></IonIcon>
          <span>Search Menu</span>
        </div>
        <div className="w-2/5 flex justify-evenly items-center text-gray-800">
          <NavLink to="/" className="hover:text-[#FF6B35]">
            HOME
          </NavLink>
          <NavLink to="/menu" className="hover:text-[#FF6B35]">
            MENU
          </NavLink>
          <NavLink to="/#ContactUs" className="hover:text-[#FF6B35]">
            CONTACT US
          </NavLink>
          <NavLink to="/cart" className="hover:text-[#FF6B35]">CART</NavLink>
          {!token ? (
            <NavLink to="/login" className="hover:text-[#FF6B35]">
              SIGN IN
            </NavLink>
          ) : (
            <div className="relative group flex items-center">
              <IonIcon icon={personCircleOutline} className="text-3xl"></IonIcon>
              <ul className="absolute hidden top-7 -right-15 z-1 hover:block group-hover:block flex-col hover:gap-5 bg-white py-6 px-8 list-none border rounded-lg">
                <li className="flex items-center gap-5 cursor-pointer whitespace-nowrap hover:text-[#ff6b35] mb-2">
                  <IonIcon icon={bagOutline } />
                  <p>My Orders</p>
                </li>
                <hr />
                <li onClick={logout} className="flex items-center gap-5 cursor-pointer whitespace-nowrap hover:text-[#ff6b35] mt-2">
                  <IonIcon icon={logOutOutline} />
                  <p>Log Out</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/*<NavLink>
        <div className="font-sigmar text-4xl  bg-linear-to-b from-40% outline  from-cq to-red-900 bg-clip-text text-transparent ">
          Feastify
        </div>
      </NavLink>
      <div className="px-12 w-2/5 flex justify-between items-center">
        <NavLink className='bg-aw py-2 px-4 rounded-[50px] hover:bg-orange-200 text-orange-600 hover:text-orange-800'> MENU</NavLink>
        <button className='bg-aw py-2 px-4 rounded-lg cursor-pointer  hover:bg-orange-200 text-orange-600 hover:text-orange-800' onClick={onSignIn}> SIGN IN</button>
        <NavLink className='bg-aw py-2 px-4 rounded-lg hover:bg-orange-200 text-orange-600 hover:text-orange-800'> ABOUT US</NavLink>
        <NavLink className='bg-aw py-1 px-4 rounded-lg hover:bg-orange-200 text-orange-600 hover:text-orange-800'>
          <div className="flex place-content-evenly items-center  ">
            <IonIcon icon={cartIcon} size="large"></IonIcon>
          </div>
        </NavLink>
      </div> */
