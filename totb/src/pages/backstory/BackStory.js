import MainContainer from './../../containers/MainContainer'
import NextPageButton from './../../generalComponents/NextPageButton'
import { backStoryData } from './../../data/lessonData'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import Newspaper from '../newspaper/Newspaper'
import client from '../../images/client.jpg'
import teacher from '../../images/teacher.png'


function Home() {

    const { backStoryText } = backStoryData


    return (
        <>
            <MainContainer>
                <SpeechBubbleLeft image={teacher}>
                    {backStoryText}
                </SpeechBubbleLeft>
                <Newspaper/>
            </MainContainer>
        </>
    )
}

export default Home