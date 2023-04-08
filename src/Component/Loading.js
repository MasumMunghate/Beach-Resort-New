import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';

export default function Component() {
  return (
    <div className="loading">
      <h4>Room Data Loading</h4>
      <img src={loadingGif} alt='Loading Bar' ></img>
    </div>
  )
}
