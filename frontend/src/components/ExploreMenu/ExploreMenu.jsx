import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

export default function ExploreMenu({category,setCategory}){
    return(
        <>
        <div className='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-description'> Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your carvings and elevate your dining experience,one delicious meal at a time</p>
            <div className='explore-menu-list'>
                {menu_list.map((li)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===li.menu_name?"All":li.menu_name)}  key={li.id} className='explore-menu-list-item'>
                            <img className={category===li.menu_name?"active":""} src={li.menu_image} alt={li.menu_name} />
                            <p>{li.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
            
        </>
    )
}