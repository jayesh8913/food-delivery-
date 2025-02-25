import React from "react"
import Navbar from "./components/Navbar/Navbar"

const App=()=>{
  return (<>
  <Navbar/>
  <hr/>
  <div className="app-content">
    <sidebar/>

  </div>
  
  </>)
}
export default App