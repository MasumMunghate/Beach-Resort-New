import React from 'react'
import Banner from '../Component/Banner';
import Hero from '../Component/Hero'; 
import { Link } from "react-router-dom";
import Services from '../Component/Services';
import FeaturedRooms from '../Component/FeaturedRooms';

const Home = () => {
  return (
    <>
    <Hero>
    <Banner title ="Luxurious Rooms" subtitle="Delus Room Starting at ₹499 ">
    <Link  to="/Rooms" className="btn-primary">
          Our Rooms 
    </Link>
    </Banner>
  </Hero>
  <Services/>
  <FeaturedRooms/>
    </>
  )
}



export default Home
