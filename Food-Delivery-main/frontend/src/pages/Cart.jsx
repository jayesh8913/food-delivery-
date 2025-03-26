import React, { useContext } from "react";
import { food_list } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { IonIcon } from "@ionic/react";
import { caretDownOutline, caretUpOutline ,chevronDownOutline,closeCircleOutline} from "ionicons/icons";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cartItem, addToCart, removeFromCart, deleteCartItem } =
    useContext(StoreContext);
  const totalCost = Object.keys(cartItem).reduce((acc, id) => {
    const item = food_list.find((food) => food._id === id);
    return item ? acc + item.price * cartItem[id] : acc;
  }, 0);
  if(totalCost==0){
    return(
      <div className="mt-18">
        <div className="text-3xl font-bold mb-4 text-[#ff6b35] text-center">Your Cart is Empty</div>
        <div className=" flex justify-center items-center mt-6">
        <img src="https://images.unsplash.com/photo-1619191163420-4a7c0798b8a4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className="w-lg rounded-xl"/>
        </div>
        <div className="flex justify-center mt-10">
        <NavLink to="/menu" className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-bold py-3 px-8 rounded-full transition duration-300 text-lg flex gap-2 items-center justify-center">
            <div>Browse Menu</div>
            <div className="relative top-1">
              <IonIcon icon={chevronDownOutline}></IonIcon>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
  return (
    <div className="p-4 bg-white text-neutral-700 mt-16 container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-[#ff6b35] text-center">
        <span className="text-neutral-800">Your </span>Cart
      </h1>
      <table className="w-full border-collapse mb-10">
        <thead className="bg-[#2ec4b6]">
          <tr className="text-white font-bold">
            <th className=" text-center ">Food</th>
            <th className="p-2 text-center ">Title</th>
            <th className="p-2 text-center ">Price</th>
            <th className="p-2 text-center ">Quantity</th>
            <th className="p-2 text-center ">Total</th>
            <th className="p-2 text-center ">Remove</th>
          </tr>
        </thead>
        <tbody className=" ">
          {food_list
            .filter(
              (item) =>
                !(cartItem[item._id] == undefined || cartItem[item._id] == 0)
            )
            .map((item) => {
              const total = item.price * cartItem[item._id];
              return (
                <tr key={item._id} className="border-b-1 border-gray-200">
                  <td className="p-2 flex justify-center items-center border border-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-auto"
                    />
                  </td>
                  <td className="p-2 text-center">{item.name}</td>
                  <td className="p-2 text-center">₹{item.price.toFixed(2)}</td>
                  <td className="p-2 text-center">
                    <div className="flex gap-3 justify-center">
                      <IonIcon
                        icon={caretDownOutline}
                        onClick={() => {
                          removeFromCart(item._id);
                        }}
                        className="p-0.5 border rounded-md"
                      />
                      <span className="">{cartItem[item._id]}</span>
                      <IonIcon
                        icon={caretUpOutline}
                        onClick={() => {
                          addToCart(item._id);
                        }}
                        className="p-0.5 border rounded-md"
                      />
                    </div>
                  </td>
                  <td className="p-2 text-center">₹{total.toFixed(2)}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() =>
                        deleteCartItem(item._id)
                      }
                      className="text-red-500 cursor-pointer"
                    >
                      <IonIcon icon={closeCircleOutline} className="text-lg " />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="mt-16">
        <div className="text-2xl text-neutral-800">Cart Totals</div>
        <div className="w-3/5 mt-4">
        <div className="flex justify-between border-b border-gray-200 mb-3 pb-2">
            <span>Subtotal</span>
            <span>₹{totalCost}</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 mb-3 pb-2">
            <span>Delivery Fee</span>
            <span>₹50</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 mb-3 pb-2">
            <span>GST(18%)</span>
            <span>₹{totalCost*0.18}</span>
        </div>
        <div className="flex justify-between font-bold mb-3">
            <span >Total</span>
            <span>₹{totalCost*1.18+50}</span>
        </div>
        </div>
        <div className="flex justify-center px-12 mt-6">
        <button className=" px-5 py-2 rounded-2xl bg-[#ff6b35] hover:bg-[#ff6b35]/90 font-bold text-white cursor-pointer transition-colors duration-300">Order Now</button>
        </div>
      </div>
    </div>
  );
}
