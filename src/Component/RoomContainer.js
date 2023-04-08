// import React from 'react'
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomList.js"
import {  withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer ({context}){
    const {loading , sortedRooms, rooms} = context;

            if(loading){
              return <Loading/>;
            }

            return(
              <div>
                  <RoomsFilter rooms={rooms} />
                  <RoomsList rooms={sortedRooms} />
              </div>
            )
}
export default withRoomConsumer(RoomContainer);






