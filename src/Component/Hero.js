
import React from 'react'
// className={hero} > {children} meaning :- every time we Render the hero component we have the option to change the class name
export default function Hero({children , hero}) {
  return <header className={hero} > {children}</header>
}
// children means banner ke andar ke links means inside the component

Hero.defaultProps = {
    hero : "defaultHero"
}