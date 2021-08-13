import { 
    HouseImage, 
    HousePageContainer, 
    InnerContainerSpeech, 
    MapContainer, 
    MapImage, 
    DoorBell,
    BellContainer,
    HouseContainer
 } from './houseComponents/HouseComponents'
import { SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import map from '../../images/map.png'
import map2 from '../../images/map2.png'



function House(props) {

    function handleDoorClick() {
        //setIsDoorOpen(true)
        setTimeout(() => {
            props.setDoorWasOpened(true)
        }, 500)
    }

    // chay and wendy urban
    // rest rural

    return (
        <>
            <HousePageContainer>
                <HouseContainer>
                    <HouseImage src={props.house} />
                </HouseContainer>
                <BellContainer>
                    <DoorBell onClick={handleDoorClick}>Knock on Door</DoorBell>
                </BellContainer>
                <MapContainer>
                    <MapImage src={map2} alt="Another Image zoom-on-hover effect" />
                </MapContainer>
                <InnerContainerSpeech>
                    <SpeechBubbleRight minHeight="0">This looks like the place! Guess I'd better knock on the door...</SpeechBubbleRight>
                </InnerContainerSpeech>

            </HousePageContainer>
        </>
    )
}

export default House