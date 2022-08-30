import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 import Header from "../header/header.jsx"


const Navigation = () => {
  return (
    <>
  
      <Router>
       <Header /> 
        <Routes>
        {/* <Route path="/" element={<Home/>} ></Route>
           <Route exact path='/about'element={<About/>} /> 
          <Route path="/buy" element={<PropertySale/>} ></Route>
          <Route path="/rent" element={<Property/>} ></Route>
          <Route path="/single" element={<SinglePropery/>} ></Route> */}

          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found </h2>
              </div>
            }
          />
        </Routes>
   
      </Router>
    </>
  )
}

export default Navigation
