import JsonData from '../../data/data.json';
import { useState, useEffect } from 'react';
import Home from '../home/home.jsx';
import About from '../About/about.jsx';
import Services from '../services/services.js';
import Contact from '../contact/contact.js';
import Car from '../Car/car.jsx';
import Pricing from '../Pricing/pricing.jsx';
const Main = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Home data={landingPageData.Header} />
      <Car />

      <Services data={landingPageData.Services} />

      <About data={landingPageData.About} />
      <Pricing data='' />

      <Contact data={landingPageData.Contact} />
    </>
  );
};

export default Main;
