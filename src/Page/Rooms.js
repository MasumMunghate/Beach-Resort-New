import React from 'react'
import Banner from '../Component/Banner'
import Hero from '../Component/Hero'
import { Link } from "react-router-dom";
import RoomsContainer from '../Component/RoomContainer';

const Rooms = () => {
  return( 
    <>
    <Hero hero="roomsHero">
    <Banner title="Our Rooms" subtitle="">
    <Link  to="/" className="btn-primary">
          Go to Home Page
    </Link>
    </Banner>
    </Hero>
        <RoomsContainer/>
    </>
  )
          
}

export default Rooms

