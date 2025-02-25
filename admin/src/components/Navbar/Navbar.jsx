import React from "react"
import './navbar.css'
import {assests} from '../../assets/assets'

const Navbar=()=>{
  return (<div className="navbar">
  <img className='logo' src={assests.logo} alt=""/>
  <img className='profile' src={assests.profile_img} alt=""/>
  </div>)
}
export default Navbar