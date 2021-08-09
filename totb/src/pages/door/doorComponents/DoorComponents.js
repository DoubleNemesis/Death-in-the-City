import styled, { keyframes } from 'styled-components'
import doorsign from '../../../images/doorsign.png'
import brick from '../../../images/brick.jpg'

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
const fadeIn = keyframes`
0% { opacity: 0;}
100% { opacity: 1;}
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
/* background-image: url(${({ doorImg }) => doorImg}); */
background-color: transparent;
/* background-color: black; */
width: 100%;
max-width: 100%;
min-height: 100vh;
top: 8.5%;
left: 0px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
/* animation: ${({ isDoorOpen }) => isDoorOpen ? OpenDoor : null} 3s;
transform-origin: left;
transform-style: preserve-3d;
animation-fill-mode: forwards;
animation-delay: .1s;
z-index: 4; */
/* border: 5px solid red; */

@media(min-width: 700px){
  top: 8%;
}

@media(min-width: 1025px){
  animation: ${({ isDoorOpen }) => isDoorOpen ? FadeOut : null} 1s;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  z-index: 4; 
  background-image: url(${({house})=>house});
  background-size: cover;
}
`
export const StyledDoor = styled.div`
position: absolute;
background-image: url(${({ doorImg }) => doorImg});
/* background-color: #999; */
width: 100%;
max-width: 100%;
min-height: 100vh;
height: 100vh;
top: 0;
left: 0px;
background-repeat: no-repeat;
background-size: cover;
background-position: top;
animation: ${({ isDoorOpen }) => isDoorOpen ? OpenDoor : null} 3s;
transform-origin: left;
transform-style: preserve-3d;
animation-fill-mode: forwards;
animation-delay: .1s;
z-index: 4;
/* border: 1px solid green; */

/* media query + new door and new animation? */

@media(min-width: 1025px){
  display: none;
  width: 30%;
  left: 0;
  right: 0;
  margin: auto;
  height: 95%;
  max-height: 95%;
  animation: none;
  background-size: contain;
}

`



export const DoorSign = styled.div`
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
`
export const DoorBellBox = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
position: absolute;
right: 10px;
top: 20%;
background-color: whitesmoke;
width: 28px;
height: 50px;
/* margin: 2em; */
color: white;
font-size: 1.4rem;
border: 2px solid midnightblue;
box-shadow: 1px 1px 1px 0px #333;
animation: ${animateBorder} 2s ease-in-out infinite alternate ;
border: 1px red solid;

@media(min-width: 700px){
  top: 30%;
  right: 30px;
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
const WitnessIntroContainer = styled.div`
display: flex;
width: 100%;
background-color: skyblue;
/* min-height: 200px; */
padding: .5em;
box-sizing: border-box;
align-items: flex-start;
animation: ${fadeIn} 1.5s;
    animation-fill-mode: forwards;
    animation-delay: 0s;

@media(min-width: 1025px){
  margin-right: .5em;
  border: 4px #141414 solid;
  border-radius: 5px;
    /* animation: ${fadeIn} 1s;
    animation-fill-mode: forwards;
    animation-delay: 0s; */
}
`
const WitnessImage = styled.img`
width: 40%;
height: auto;
padding: .5em;
border-radius: 10px; 

@media(min-width: 1025px){
  width: 20%;
  padding: 5em;
}

`
const WitnessText = styled.div`
padding: .5em;

h3{
    font-size: 1.3rem;
}

p{
  font-size: 1rem;
}

@media(min-width: 700px){
  font-size: 1.2rem;
}


`

export const WitnessIntroBox = (props)=>{
    return(
        <WitnessIntroContainer>
            <WitnessImage src={props.personImage}/>
            <WitnessText><h3>Witness Info</h3><p>{props.witnessInfo}</p></WitnessText>
        </WitnessIntroContainer>
    )
}
