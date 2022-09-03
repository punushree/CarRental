import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../header/header.jsx"
import JsonData from "../../data/data.json";
import { useState, useEffect } from "react";
import Main from "../../screens/Main/main.jsx"

import Booking from "../../screens/Booking/booking.jsx"


const Navigation = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>

      <Router>
        <Header />


        <Routes>

          <Route path="/" element={<Main />} ></Route>

          <Route path="/booking" element={<Booking data={landingPageData.Cars} />} ></Route>


        </Routes>

      </Router>
    </>
  )
}

export default Navigation
