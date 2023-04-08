import React from 'react'
import Banner from '../Component/Banner'
import Hero from '../Component/Hero'
import { Link } from "react-router-dom";

const Error = () => {
  return <Hero >
    <Banner title="Error 404" subtitle="Page Not Found"> 
    <Link to="/" className="btn-primary">
      Back To The Home Page
    </Link>
    </Banner>
  </Hero>
}

export default Error
 