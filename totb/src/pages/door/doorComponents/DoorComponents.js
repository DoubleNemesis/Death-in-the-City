import styled, { keyframes } from 'styled-components'
import doorsign from '../../../images/doorsign.png'

const OpenDoor = keyframes`
from { transform: rotateY(0deg); }
to { transform: rotateY(120deg); }
`
const CloseDoor = keyframes`
from { transform: rotateY(120deg); }
to { transform: rotateY(0deg); }
`

export const Inside = styled.div`
width: 100%;
background-color: white;
`

export const StyledDoor = styled.div`
position: absolute;
background-image: url(${({ doorImg }) => doorImg});
background-color: #999;
width: 100%;
min-height: 89vh;
top: 10%;
left: 0px;
background-repeat: no-repeat;
background-size: cover;
animation: ${({ isDoorOpen }) => isDoorOpen ? OpenDoor : null} 3s;
transform-origin: left;
transform-style: preserve-3d;
animation-fill-mode: forwards;
animation-delay: 1s;
z-index: 4;
border: 1px solid white;
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
/* background-image: url(${doorsign});
background-size: contain; */
display: flex;
align-items: flex-end;
justify-content: center;
position: absolute;
left: 71.5%;
top: 20%;
background-color: blue;
width: 28px;
height: 50px;
margin: 2em;
color: white;
font-size: 1.4rem;
border: 2px solid skyblue;
box-shadow: 2px 2px 4px #333;
`
export const DoorBell = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  border-radius: 50%;
  margin-bottom: 5px;
  box-shadow: 2px 2px 4px #333;
  border: 1px solid white;

  :hover{
    box-shadow: 1px 1px 1px #333;
    padding: 8px;
    background-color: darkorange;
  }
`
const WitnessIntroContainer = styled.div`
display: flex;
width: 100%;
background-color: white;
min-height: 200px;
padding: .5em;
`
const WitnessImage = styled.img`
max-width: 40%;
padding: .5em;
`
const WitnessText = styled.div`
max-width: 40%;
padding: .5em;

h3{
    font-size: 1.3rem;
}

`

export const WitnessIntroBox = (props)=>{
    return(
        <WitnessIntroContainer>
            <WitnessImage src={props.personImage}/>
            <WitnessText><h3>Witness Info</h3>{props.personText}</WitnessText>
        </WitnessIntroContainer>
    )
}
