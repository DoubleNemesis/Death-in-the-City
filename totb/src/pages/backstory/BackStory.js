import {MainContainer, ImageContainer, FloatingImage, NewspaperContainer} from './backStoryComponents/BackStoryComponents'
// import ImageContainer from './backStoryComponents/BackStoryComponents'
import NextPageButton from './../../generalComponents/NextPageButton'
import { backStoryData } from './../../data/lessonData'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import Newspaper from '../newspaper/Newspaper'
import client from '../../images/client.jpg'
import teacher from '../../images/teacher.png'
import crimescene from '../../images/crimescene.jpg'
import journalist from '../../images/journalist.png'


function Home() {

    const { backStoryText2 } = backStoryData


    return (
        <>
            <MainContainer>
                <div>
                <SpeechBubbleLeft image={client} bubbleWidth="70">
                    {backStoryText2}
                </SpeechBubbleLeft>
                <ImageContainer image={crimescene} width="500px">
                   <p>"The scene live at Kaplinsky Tower..."</p>
                <FloatingImage src={journalist}/>
                </ImageContainer>
                </div>
                <NewspaperContainer/>
                <Newspaper/>
            </MainContainer>
        </>
    )
}

export default Home