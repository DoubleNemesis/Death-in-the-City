import { useState } from 'react'
import { StyledDoorOuter, StyledDoor, DoorSign, DoorBellBox, DoorBell } from './doorComponents/DoorComponents'

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
                <StyledDoor isDoorOpen={isDoorOpen}  doorImg={props.doorImg} doorImgL={props.doorImgL}>
                    <DoorSign isDoorOpen={isDoorOpen} >{props.doorTitle}'s House</DoorSign>
                    <DoorBellBox isDoorOpen={isDoorOpen} onClick={handleDoorBellClick}>
                        <DoorBell></DoorBell>
                    </DoorBellBox>
                    </StyledDoor>
            </StyledDoorOuter>
        </>
    )
}

export default Door