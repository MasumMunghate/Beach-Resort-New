import React, { Component } from 'react'
import { RoomContext } from '../Context'; // yaha pe RoomContext import kiya hai to Provider ki value aa jayegi edhar
import Loading from './Loading'
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext; // Accesing The Context
  render() {
    let {loading, featuredRooms : rooms} = this.context; // Render Something Based On value
    console.log(rooms , "featuredRooms ko new name diya hai rooms");

    rooms = rooms.map(room => {
      return <Room key={room.id} room = {room}/> // ye component 3 bar render hoga
    })
    
    return (
      <section className="featured-rooms">
        <Title title="Featured Room"/>
        <div className="featured-rooms-center">
          {/* if loading = true Render the <Loading/> else show the rooms */}
        {loading?<Loading/> : rooms}  
        </div>
      </section>
    )
  }
}



//Using the contextType Property we use nearest Current value with help of this.context