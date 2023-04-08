import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
// import { icons } from 'react-icons';
export default class Services extends Component {
  state = {
    services:[
        {
          icon :<FaCocktail/>,
           title : "Free Cocktail",
           info : "lorem ipsum dolor sit amet consectetur adipising elit. Magni, corporis !"
        },
        {
          icon :<FaHiking/>,
           title : "EndLess Hiking",
           info : "lorem ipsum dolor sit amet consectetur adipising elit. Magni, corporis !"
        },
        {
          icon :<FaShuttleVan/>,
           title : "Free shuttle",
           info : "lorem ipsum dolor sit amet consectetur adipising elit. Magni, corporis !"
        },
        {
          icon :<FaBeer/>,
           title : "Strongest Beer",
           info : "lorem ipsum dolor sit amet consectetur adipising elit. Magni, corporis !"
        }
     ]
       
  }
  render() {
    return (
      <section className="services">
       <Title title="services"/>
       <div className="services-center">
        {this.state.services.map((item, index)=>{
          return <article className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
       </div>
      </section>
    )
  }
}

