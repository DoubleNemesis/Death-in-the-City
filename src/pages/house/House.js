import { 
    HouseImage, 
    HousePageContainer, 
    InnerContainerSpeech, 
    MapContainer, 
    MapImage, 
    BtnContainer,
    HouseContainer
 } from './houseComponents/HouseComponents'
import { SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import { FrontPageButton } from '../../generalComponents/GeneralButton'



function House(props) {

    function handleDoorClick() {
        setTimeout(() => {
            props.setDoorWasOpened(true)
        }, 500)
    }


    return (
        <>
            <HousePageContainer>
                <InnerContainerSpeech>
                    <SpeechBubbleRight minHeight="0" bubbleMaxWidth="90" bubbleWidth="90">
                        {props.houseMessage || `This looks like the place! Guess I'd better go and see who's home..`}
                    
                    </SpeechBubbleRight>
                </InnerContainerSpeech>
                <BtnContainer>
                    <FrontPageButton bgColor="red" onclick={handleDoorClick} arrow>Pay a visit</FrontPageButton>
                </BtnContainer>
                <MapContainer>
                    <MapImage src={props.mapImage} alt="map showing witness's address."  coords={props.coords}/>
                </MapContainer>
                <HouseContainer>
                    <HouseImage src={props.house} alt="witness's house"/>
                </HouseContainer>

            </HousePageContainer>
        </>
    )
}

export default House