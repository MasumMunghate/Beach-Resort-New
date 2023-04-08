import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  state ={
    isOpen : false // initially vo close hoga 
  }

   handalToggal = ()=>{
    this.setState({isOpen : !this.state.isOpen}); //if else condition when we toggal the navbar
    // As soon as we click the fabIcon isOpen tru ho jayaga
  }
  render() {
    return (
      <nav className='navbar'>
      <div className="nav-center">
        {/*For Image And Logo*/}
      <div className="nav-header">
        <Link  to="/">
          <img src={logo} alt="Beach Resort"/>
        </Link>
        <button type='button' className='nav-btn' onClick={this.handalToggal}>
        <FaAlignRight className="nav-icon"/>
        </button>
        
      </div>
      {/*For Image And Logo*/}
      <ul className={this.state.isOpen?"nav-links show-nav"  : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Rooms">Rooms</Link>
        </li>
      </ul>
      </div>
      </nav>
    )
  }
}
