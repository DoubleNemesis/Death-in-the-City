import {MainContainer, ImageContainer, FloatingImage, NewspaperOverlayContainer} from './backStoryComponents/BackStoryComponents'
import { backStoryData } from './../../data/lessonData'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import Newspaper from '../newspaper/Newspaper'
import client from '../../images/client.jpg'
import crimescene from '../../images/crimescene.jpg'
import journalist from '../../images/journalist.png'


function Home() {

    const { backStoryText2 } = backStoryData

    return (
        <>
            <MainContainer>
                <div >
                <SpeechBubbleLeft image={client} alt="Terence Grey" bubbleWidth="70">
                    {backStoryText2}
                </SpeechBubbleLeft>
                <ImageContainer image={crimescene} alt="crime scene" width="500px">
                   <p>"The scene live at Kaplinsky Tower..."</p>
                <FloatingImage src={journalist} alt="reporter"/>
                </ImageContainer>
                </div>
                <NewspaperOverlayContainer/>
                <Newspaper alignItems="flex-start"/>
            </MainContainer>
        </>
    )
}

export default Home