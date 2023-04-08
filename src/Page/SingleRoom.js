//Class Based Component
import React, { Component } from 'react'
import defaultBcg  from "../images/room-1.jpeg"
// import Hero from "../Component/Hero";
import Banner from "../Component/Banner"
import {RoomContext} from "../Context"
import {Link} from "react-router-dom"
import StyledHero from '../Component/StyledHero';

export default class SingleRoom extends Component {

  constructor(props){ // Acces The ParaMeter that we pass The Room Component Named As slug
    super(props);
    console.log(this.props);  // We Are not passing any props Property But it give us bunch of Things (Singal Room Mai jitni bhi property hai vo sub Show Karegi) Beacaus oF Routing

    this.state = {
        slug : this.props.match.params.slug, // Property Thet We Use
        defaultBcg
    }
  }
   static contextType = RoomContext; // Accesing The Context

  // componentDidMount(){}
  render() {
      const {getRoom} = this.context // Contaxt Se Acces Kre(getRoom Funtion ko or usko destructur kiya hai)
      const room = getRoom(this.state.slug); //slug ko acces kiya hai room mai
      console.log(room,"Featured room ka data asses hua hai singal room mai"); //Feature Room mai 3 Component Hai Uska Data Acces Kiya Hai Context Ke Help Se
      if(!room){  // agar Room Available Nhi hui to Ye Component Render Hoga
        return(
          <div className="error">
            <h3>No Such Room Are Available</h3>
            <Link to="/Rooms" className="btn-primary">
              Back To The Room
            </Link>
          </div>
        )
      }

      const {name , description, capacity, size, price, extras, breakfast, pets, images} = room;

      const [mainImg,...defaultImg] = images; // DeStructure The Img Thats Why We cant see The Hero Componet Images Again

    return (
      <>
      <StyledHero  img ={mainImg || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
            {defaultImg.map((item, index)=>{
              return <img key={item} src={item} alt={name}/>
            })}
        </div>
        <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <articals className="info">
              <h3>Info</h3>
              <h6>Price : ₹{price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                Max capacity : {" "}{capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>
                {pets ? "Pets are allowed" : "Pets are not allowed"}
              </h6>
              <h6>
                {breakfast && " Free breakfast Including"}
              </h6>
            </articals>
        </div>
      </section>

      <section className="room-extras">
        <h6>ectras</h6>
            <ul className="extras">
            {extras.map((item, index)=>{
             return <li key={index} >-{item}</li>
            })}
            </ul>
      </section>

      </>
    )
  }
}
