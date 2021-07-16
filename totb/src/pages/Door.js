import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import NextPageButton from '../generalComponents/NextPageButton'
import { SpeechBubbleLeft, SpeechBubbleRight } from './witness/witnessComponents/Questions'
import { TextButton, TextButtonContainer } from '../generalComponents/SpeechTextButton'
import { CrimeSceneData } from '../data/lessonData'
import { clientData } from '../data/lessonData'
import doorsign from './../images/doorsign.png'

const OpenDoor = keyframes`
from { transform: rotateY(0deg); }
to { transform: rotateY(120deg); }
`
const CloseDoor = keyframes`
from { transform: rotateY(120deg); }
to { transform: rotateY(0deg); }
`

const Inside = styled.div`
width: 100%;
background-color: white;
`

const StyledDoor = styled.div`
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

const DoorSign = styled.div`
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
const DoorBellBox = styled.div`
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
const DoorBell = styled.button`
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


function Door(props) {
    const [isDoorOpen, setIsDoorOpen] = useState(false)

    function handleDoorBellClick() {
        setIsDoorOpen(true)
        setTimeout(() => {
            props.setDoorWasOpened(true)
        }, 1200)
    }

    return (
        <>
            <StyledDoor isDoorOpen={isDoorOpen} doorImg={props.doorImg}>
                <DoorSign>{props.doorTitle}'s House</DoorSign>
                <DoorBellBox onClick={handleDoorBellClick}>
                    <DoorBell></DoorBell>
                </DoorBellBox>
            </StyledDoor>
            <Inside>
                <SpeechBubbleRight>{props.speechBubbleText || `Hi! I'm a private detective investigating the death of Lexington Grey. Can I ask you some questions?`}</SpeechBubbleRight>
            </Inside>


        </>
    )
}

export default Door