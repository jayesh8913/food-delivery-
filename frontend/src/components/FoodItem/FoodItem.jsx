import { assets } from '../../assets/assets'
import './FoodItem.css'

export default function FoodItem({id,name,price,description,image}){
    return(
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt="" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts}></img>
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className="food-item-price">₹{price}</p>
                

            </div>
        </div>
    )
}