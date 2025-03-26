import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToSection from './Scroll/ScrollToSection';
import SignIn from './pages/SignIn';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import ScrollToTop from './Scroll/ScrollToTop';
import Cart from './pages/Cart';



function App() {
  return(
    <div className='font-roboto'>
    <ScrollToSection/>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<SignIn/>}></Route>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </div>
  )
}

export default App
