
import { top_sellers } from "../assets/assets";
import Slider from "react-slick";
import FoodCard from "./FoodCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {
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
        {top_sellers.map((item) => {
          return <FoodCard item={item} key={item._id} popularDish={true}></FoodCard>;
        })}
      </Slider>
    </div>
  );
}
