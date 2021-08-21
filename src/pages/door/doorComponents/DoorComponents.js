import styled, { keyframes } from 'styled-components'
import doorsign from '../../../images/doorsign.png'

const OpenDoor = keyframes`
from { transform: rotateY(0deg); }
to { transform: rotateY(120deg); }
`
const FadeOut = keyframes`
from { opacity: 1; }
to { opacity: 0; }
`
const animateBorder = keyframes`
from { box-shadow: 0px 0px 5px 3px red; }
to { box-shadow: 0px 0px 5px 3px orange; }
`
export const Inside = styled.div`
grid-area: inside;
width: 100%;
background-color: 'white';

@media(min-width: 1025px){
  width: unset;
  margin-right: 10em;
}
`

export const StyledDoorOuter = styled.div`
position: absolute;
background-color: transparent;
width: 100%;
max-width: 100%;
min-height: 93%;
top: 8.5%;
left: 0px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
/* border: 1px solid red; */



@media(min-width: 700px){
  top: 8%;
}

@media(min-width: 1025px){
  width:100%;
  /* animation: ${({ isDoorOpen }) => isDoorOpen ? FadeOut : null} 1s;
  animation-fill-mode: forwards;
  animation-delay: 0s; */
  z-index: 4; 
  background-size: cover;
  top: 8%;

}
`
export const StyledDoor = styled.div`
position: relative;
background-image: url(${({doorImg})=>doorImg});
background-size: contain;
background-repeat: no-repeat;
width: 100%;
max-width: 100%;
min-height: 100vh;
animation: ${({ isDoorOpen }) => isDoorOpen ? OpenDoor : null} 3s;
transform-origin: left;
transform-style: preserve-3d;
animation-fill-mode: forwards;
animation-delay: .1s;
z-index: 1;

@media(min-width: 700px){
background-size: cover;
max-height: 90vh;
}

@media(min-width: 1025px){
  position: absolute;
width: 900px;
background-image: url(${({doorImgL})=>doorImgL});
background-size: contain;
height: 716px;
left: 0;
right: 0;
margin: auto;
min-height: unset;
animation: none;

}

`

export const DoorSign = styled.div`
position: relative;
top: 0;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${doorsign});
background-size: contain;
width: 250px;
height: 250px;
margin: 2em;
color: white;
font-size: 1.4rem;
z-index: 20;

@media(min-width: 1025px){
  margin-left: 280px;
}
`
export const DoorBellBox = styled.div`
position: absolute;
display: flex;
align-items: flex-end;
justify-content: center;
position: absolute;
right: 10px;
top: 20%;
background-color: whitesmoke;
width: 28px;
height: 50px;
color: white;
font-size: 1.4rem;
border: 2px solid midnightblue;
box-shadow: 1px 1px 1px 0px #333;
animation: ${animateBorder} 2s ease-in-out infinite alternate ;
z-index: 3;



@media(min-width: 700px){
  top: 30%;
  right: 30px;
}

@media(min-width: 1025px){
  right: 340px;
}
`
export const DoorBell = styled.button`
  background-color: gold;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  border-radius: 50%;
  margin-bottom: 5px;
  box-shadow: 2px 2px 2px 0px #333;
  border: 1px solid #333;
  

  :hover{
    box-shadow: 1px 1px 1px #333;
    padding: 8px;
    background-color: darkorange;
  }
`




