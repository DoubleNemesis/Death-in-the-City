import { useState } from 'react'
// import NextPageButton from '../../generalComponents/NextPageButton'
import { SpeechBubbleLeft, SpeechBubbleRight } from '../../generalComponents/ConversationComponents'

import { StyledDoorOuter, StyledDoor, DoorSign, DoorBellBox, DoorBell, Inside, WitnessIntroBox } from './doorComponents/DoorComponents'



function Door(props) {
    const [isDoorOpen, setIsDoorOpen] = useState(false)

    function handleDoorBellClick() {
        setIsDoorOpen(true)
        setTimeout(() => {
            props.setDoorWasOpened(true)
        }, 1400)
    }

    return (
        <>
            <StyledDoorOuter isDoorOpen={isDoorOpen} house={props.house} >
                <StyledDoor isDoorOpen={isDoorOpen}  doorImg={props.doorImg}>
                    <DoorSign>{props.doorTitle}'s House</DoorSign>
                    <DoorBellBox onClick={handleDoorBellClick}>
                        <DoorBell></DoorBell>
                    </DoorBellBox>
                </StyledDoor>
            </StyledDoorOuter>
            {/* <Inside>
                <WitnessIntroBox personImage={props.personImage} witnessInfo={props.witnessInfo}/>
                <SpeechBubbleRight>{props.speechBubbleText || `Hi! I'm a private detective investigating the death of Lexington Grey. Can I ask you some questions?`}</SpeechBubbleRight>
            </Inside> */}
        </>
    )
}

export default Door