import React from 'react'
import { useContext } from 'react' // Acces The Contax.js
import { RoomContext } from "../Context";
import Title from "../Component/Title";

// get All Unique Value or the value which is reapited

const getUnique = (items, value) => {
                  // set accept only uniqui value (we got uniqui value in select tag  )
  return [...new Set(items && items.map(item => item[value]))];  // get a unique Value
};

export default function RoomFilter({rooms}) {
  const context   = useContext(RoomContext) // With help of UseConatext we acces the RoomContext
  console.log(context);  
  const {handalChange , type , capacity, price, minPrice, maxPrice,minSize,maxSize, breakfast, pets} = context;
  //get unique Type
  var types = getUnique(rooms, "type");
  
  console.log(types);
  //Add All
  types = ["all", ...types];

  // map the JSX
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
   // get unique capacity
   let people = getUnique(rooms, "capacity");
   people = people.map((item, index) => (
     <option key={index} value={item}>
       {item}
     </option>
   ));

  return(
    <>
    <section className="filter-container">
      <Title title="Search Room"/>
      <form className="filter-form">
      {/*Select Type */}
      <div className="form-group">
        <label>Room Type</label>
        <select name="type" id="type" value={type} className="form-control" onChange={handalChange}>
          {types}
        </select>

      </div>

      {/*End end type*/}

      {/* guests  */}
      <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handalChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}

          {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ₹{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handalChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handalChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handalChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}

         {/* extras */}
         <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handalChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handalChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}

      </form>

    </section>
    </>
    )
}
