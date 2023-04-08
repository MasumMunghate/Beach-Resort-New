import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from "../images/room-1.jpeg"
import PropTypes from "prop-types";


export default function Room({room}) {
//room props ko deStructured Kiya 
  const {name, slug, images, price} = room;
  console.log(room, 'destruecturd kiya hai');
  return (
    <article className="room">
      <div className="img-container">
      {/* images[0] || defaultImg   ye 3 Array mai se 0 index vali imgae uthayega ya fir defaultImg vali uthayega  */}
        <img src={images[0] || defaultImg} alt="singal Room"/> 
        <div className="price-top">
          <h6>₹{price}</h6>
          <p>Per Night</p>
        </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
          </Link> 
          </div> 
      <p className="room-info">{name}</p>
    </article>
  )
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
// {`/Rooms/${slug}`}  we use slug becouz every room has uniqe Slug