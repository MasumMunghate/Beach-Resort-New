// Component Variable Ke Throungt Images Ko acces Krenge we Can use JS Also Hear

import styled from 'styled-components'
import deafaultImg from '../images/room-1.jpeg';
// header is HTML Element
const StyledHero = styled.header`   
min-height: 60vh;
background: url(${props => props.img ? props.img  : deafaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;

`

export default StyledHero;























//This How Acces The property of Using variable
// const orengr = '#f15025'; using Orenge Variable Dyanamically 
// const SimpleButton = styled.button`
// color : ${orengr},
// background : green;
// font-size : 3rem
// `;

// export default SimpleButton;