

import Slider from "react-slick";
import FoodCard from "./FoodCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
export default function Carousel() {
  const {foodlist}=useContext(StoreContext);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className="mb-8">
      <Slider {...settings} className="bg-white rounded-2xl border-r-16 border-white">
        {foodlist.filter((item)=>item.bestSeller).map((item) => {
          return <FoodCard item={item} key={item._id} popularDish={true}></FoodCard>;
        })}
      </Slider>
    </div>
  );
}
