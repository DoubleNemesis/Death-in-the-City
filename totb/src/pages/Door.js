import styled, {keyframes} from 'styled-components'
import { useState } from 'react'
import NextPageButton from '../generalComponents/NextPageButton'
import { SpeechBubbleLeft, SpeechBubbleRight } from './witness/witnessComponents/Questions'
import { TextButton, TextButtonContainer } from '../generalComponents/SpeechTextButton'
import { CrimeSceneData } from '../data/lessonData'
import { clientData } from '../data/lessonData'

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
background-image: url(${({doorImg})=>doorImg});
background-color: #999;
width: 100%;
min-height: 89vh;
top: 10%;
left: 0px;
background-repeat: no-repeat;
background-size: cover;
animation: ${({isDoorOpen}) => isDoorOpen ? OpenDoor : null} 3s;
transform-origin: left;
transform-style: preserve-3d;
animation-fill-mode: forwards;
animation-delay: 2s;
z-index: 4;
border: 1px solid white;
`

const WitnessImage = styled.img`
max-width: 100%;
`


function Door(props) {
    const { clientTitle, clientText } = clientData
    const { bubbleText1, bubbleText2, bubbleText3, bubbleText4 } = CrimeSceneData
    const [bubbleTextToDisplay, setBubbleTextToDisplay] = useState(1)

    function handleTextButtonClick(e) {
        setBubbleTextToDisplay(parseInt(e.target.id))
    }

    return (
        <>

            <StyledDoor isDoorOpen={props.isDoorOpen} doorImg={props.doorImg}/>
            <Inside>
                <SpeechBubbleRight>{props.speechBubbleText || `Hi! I'm a private detective investigating the death of Lexington Grey. Can I ask you some questions?`}</SpeechBubbleRight>
            </Inside>
               

        </>
    )
}

export default Door