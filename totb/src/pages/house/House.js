import { 
    HouseImage, 
    HousePageContainer, 
    InnerContainerSpeech, 
    MapContainer, 
    MapImage, 
    DoorBell,
    BtnContainer,
    HouseContainer
 } from './houseComponents/HouseComponents'
import { SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import { FrontPageButton } from '../../generalComponents/GeneralButton'



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
                <MapContainer>
                    <MapImage src={props.mapImage} alt="map showing witness's address."  coords={props.coords}/>
                </MapContainer>
                <InnerContainerSpeech>
                    <SpeechBubbleRight minHeight="0" bubbleMaxWidth="90" bubbleWidth="90">
                        {props.houseMessage || `This looks like the place! Guess I'd better go and see who's home..`}
                    
                    </SpeechBubbleRight>
                </InnerContainerSpeech>
                <BtnContainer>
                    <FrontPageButton bgColor="red" onclick={handleDoorClick}>Pay a visit</FrontPageButton>
                </BtnContainer>

            </HousePageContainer>
        </>
    )
}

export default House