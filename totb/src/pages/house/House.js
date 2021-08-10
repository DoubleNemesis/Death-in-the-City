import { WitnessIntroBox } from '../witness/witnessComponents/Layout'
import { Inside } from '../door/doorComponents/DoorComponents'
import { HouseDisplay, Container, InnerContainer } from './houseComponents/HouseComponents'
import { SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import {FrontPageButton} from '../../generalComponents/GeneralButton'


function House(props) {

    function handleDoorClick() {
        //setIsDoorOpen(true)
        setTimeout(() => {
            props.setDoorWasOpened(true)
        }, 500)
    }

    return (
        <Container>
            <InnerContainer>
        <HouseDisplay house={props.house}/>
            </InnerContainer>
        <InnerContainer>
        <Inside>
            <WitnessIntroBox personImage={props.personImage} witnessInfo={props.witnessInfo} />
        </Inside>
        <SpeechBubbleRight>This looks like the place! Guess I'd better knock on the door...</SpeechBubbleRight>
        <FrontPageButton bgColor="red" onclick={handleDoorClick}>Knock on Door</FrontPageButton>
        </InnerContainer>
        </Container>

    )
}

export default House